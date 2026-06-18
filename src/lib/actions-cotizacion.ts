"use server";

import prisma from "@/lib/db";
import { ServiceTypeEnum } from "@/generated/prisma/client";
import { QuoteRequest, QuoteResponse, PriceRangeConfig } from "@/lib/types-cotizacion";
import { z } from "zod";

// Zod validations
const quoteRequestSchema = z.object({
  origin: z.string().min(1, "El origen es requerido"),
  destination: z.string().min(1, "El destino es requerido"),
  distanceKm: z.number().positive("La distancia debe ser un valor positivo"),
  serviceType: z.nativeEnum(ServiceTypeEnum, {
    errorMap: () => ({ message: "Tipo de servicio no válido" })
  }),
});

const savePriceRangeSchema = z.object({
  serviceType: z.nativeEnum(ServiceTypeEnum),
  distanciaMinKm: z.number().nonnegative("La distancia mínima debe ser >= 0"),
  distanciaMaxKm: z.number().positive("La distancia máxima debe ser > 0"),
  precioRango: z.number().nonnegative("El precio debe ser >= 0"),
  descripcion: z.string().optional(),
  metadata: z.any().optional(),
  createdBy: z.string().optional(),
});

/**
 * Calcula la cotización de un envío basado en la distancia y tipo de servicio.
 */
export async function quoteShipment(rawInput: QuoteRequest): Promise<QuoteResponse> {
  const logPrefix = `[quoteShipment][${rawInput.serviceType}][${rawInput.distanceKm} km]`;
  console.log(`${logPrefix} Iniciando cotización...`);

  // 1. Validar entradas con Zod
  const validation = quoteRequestSchema.safeParse(rawInput);
  if (!validation.success) {
    const errorMsg = validation.error.errors[0].message;
    console.error(`${logPrefix} Error de validación: ${errorMsg}`);
    throw new Error(errorMsg);
  }

  const { distanceKm, serviceType } = validation.data;

  // 2. Obtener todas las tarifas activas para el tipo de servicio
  const activeRanges = await prisma.priceRange.findMany({
    where: {
      serviceType,
      isActive: true,
    },
    orderBy: {
      distanciaMinKm: "asc",
    },
  });

  if (activeRanges.length === 0) {
    console.error(`${logPrefix} No se encontraron tarifas activas.`);
    throw new Error(`No hay tarifas configuradas para el servicio ${serviceType}`);
  }

  // A. Búsqueda de rango directo que cubra la distancia
  // Calculamos dinámicamente cuál es el límite superior antes del rango de excedente (ej: 10 km, o 15 km para punto de retiro)
  const nonExceedingRanges = activeRanges.filter((r) => Number(r.distanciaMaxKm) !== 9999);
  const maxLimit = nonExceedingRanges.length > 0 
    ? Math.max(...nonExceedingRanges.map((r) => Number(r.distanciaMaxKm))) 
    : 10;

  const directRange = activeRanges.find((r) => {
    const min = Number(r.distanciaMinKm);
    const max = Number(r.distanciaMaxKm);

    // Ignoramos el rango especial de km excedente (max 9999) en la coincidencia directa
    if (max === 9999) return false;

    // Rango inclusivo en min, exclusivo en max [min, max)
    // Excepto si es el límite superior de los rangos (maxLimit), donde el max se incluye [min, max]
    const isUpperLimit = max === maxLimit;
    if (isUpperLimit) {
      return distanceKm >= min && distanceKm <= max;
    }
    return distanceKm >= min && distanceKm < max;
  });

  if (directRange) {
    const price = Number(directRange.precioRango);
    console.log(`${logPrefix} Coincidencia de rango directo encontrada: ID ${directRange.id}, precio: $${price}`);
    return {
      precioFinal: price,
      desglose: {
        precioBase: price,
        excedentes: 0,
        precioAdicionalPorKm: 0,
        kmExcedentes: 0,
        esPrecioFijo: true,
      },
      duracionEstimada: estimateDuration(distanceKm, serviceType),
    };
  }

  // B. Lógica para distancias <= 10 km (con aproximación si no se encontró rango directo)
  if (distanceKm <= 10) {
    // Buscamos el rango inferior más cercano que no sea el especial de excedentes
    const lowerRange = [...activeRanges]
      .reverse()
      .find((r) => Number(r.distanciaMinKm) <= distanceKm && Number(r.distanciaMaxKm) !== 9999);

    const matchedRange = lowerRange || activeRanges[0];
    const price = Number(matchedRange.precioRango);

    console.log(
      `${logPrefix} Coincidencia por aproximación (<=10 km): ID ${matchedRange.id}, precio: $${price}`
    );

    return {
      precioFinal: price,
      desglose: {
        precioBase: price,
        excedentes: 0,
        precioAdicionalPorKm: 0,
        kmExcedentes: 0,
        esPrecioFijo: true,
      },
      duracionEstimada: estimateDuration(distanceKm, serviceType),
    };
  }

  // C. Lógica para distancias > 10 km (precio base + km excedentes)
  // Obtenemos el precio base (rango 7-10 km)
  const baseRange = activeRanges.find(
    (r) => Number(r.distanciaMinKm) === 7 && Number(r.distanciaMaxKm) === 10
  );
  // Obtenemos el precio por km excedente (rango especial 10-9999 km)
  const exceedingRange = activeRanges.find(
    (r) => Number(r.distanciaMinKm) === 10 && Number(r.distanciaMaxKm) === 9999
  );

  if (!baseRange || !exceedingRange) {
    console.error(
      `${logPrefix} Falta configuración de tarifas base (7-10 km) o excedentes (10-9999 km) para distancias > 10 km.`
    );
    throw new Error(
      `Configuración de tarifa incompleta para calcular envíos de larga distancia (> 10 km) en el servicio ${serviceType}`
    );
  }

  const precioBase = Number(baseRange.precioRango);
  const precioExcedente = Number(exceedingRange.precioRango);
  const kmExcedentes = distanceKm - 10;
  const excedentes = kmExcedentes * precioExcedente;
  const precioFinal = precioBase + excedentes;

  console.log(
    `${logPrefix} Cálculo de larga distancia: Base $${precioBase} + (${kmExcedentes} km * $${precioExcedente}/km) = $${precioFinal}`
  );

  return {
    precioFinal,
    desglose: {
      precioBase,
      excedentes,
      precioAdicionalPorKm: precioExcedente,
      kmExcedentes,
      esPrecioFijo: false,
    },
    duracionEstimada: estimateDuration(distanceKm, serviceType),
  };
}

/**
 * Calcula la duración estimada del envío de manera lógica en base al servicio.
 */
function estimateDuration(distanceKm: number, serviceType: ServiceTypeEnum): string {
  if (serviceType === ServiceTypeEnum.PUNTO_DE_RETIRO) {
    return "Disponible en 24 horas";
  }

  // Velocidades promedio urbanas en Mar del Plata
  const speed = serviceType === ServiceTypeEnum.EXPRESS ? 35 : 25; // km/h
  const buffer = serviceType === ServiceTypeEnum.EXPRESS ? 15 : 40; // minutos (retiras y entregas)

  const travelTimeMinutes = (distanceKm / speed) * 60;
  const totalMinutes = Math.ceil(travelTimeMinutes + buffer);

  if (totalMinutes < 60) {
    return `${totalMinutes} minutos`;
  }

  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

/**
 * Crea o actualiza un rango de precios validando solapamientos y brechas.
 */
export async function savePriceRange(input: {
  serviceType: ServiceTypeEnum;
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  descripcion?: string;
  metadata?: any;
  createdBy?: string;
}) {
  // 1. Validar esquema
  const validation = savePriceRangeSchema.safeParse(input);
  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  const {
    serviceType,
    distanciaMinKm,
    distanciaMaxKm,
    precioRango,
    descripcion,
    metadata,
    createdBy,
  } = validation.data;

  if (distanciaMinKm >= distanciaMaxKm) {
    throw new Error("La distancia mínima debe ser menor que la distancia máxima.");
  }

  // 2. Transacción para asegurar consistencia y evitar solapamientos concurrentes
  return await prisma.$transaction(async (tx) => {
    // Buscar todos los rangos activos para el mismo tipo de servicio
    const activeRanges = await tx.priceRange.findMany({
      where: {
        serviceType,
        isActive: true,
      },
    });

    // Validar solapamiento: min < newMax && max > newMin
    for (const range of activeRanges) {
      const min = Number(range.distanciaMinKm);
      const max = Number(range.distanciaMaxKm);

      if (distanciaMinKm < max && distanciaMaxKm > min) {
        throw new Error(
          `Solapamiento de rangos: La configuración propuesta (${distanciaMinKm}-${distanciaMaxKm} km) se solapa con el rango activo ID ${range.id} (${min}-${max} km) para el servicio ${serviceType}.`
        );
      }
    }

    // Verificar si ya existe este rango exacto (aunque esté inactivo) para reactivarlo/actualizarlo
    const existingRange = await tx.priceRange.findFirst({
      where: {
        serviceType,
        distanciaMinKm,
        distanciaMaxKm,
      },
    });

    if (existingRange) {
      return await tx.priceRange.update({
        where: { id: existingRange.id },
        data: {
          precioRango,
          descripcion,
          metadata: metadata || undefined,
          isActive: true,
          updatedBy: createdBy,
        },
      });
    }

    // Si no existe, crear uno nuevo
    return await tx.priceRange.create({
      data: {
        serviceType,
        distanciaMinKm,
        distanciaMaxKm,
        precioRango,
        descripcion,
        metadata: metadata || undefined,
        isActive: true,
        createdBy,
      },
    });
  });
}

/**
 * Obtiene todas las configuraciones de precios activas.
 */
export async function getPriceRanges(serviceType?: ServiceTypeEnum) {
  return await prisma.priceRange.findMany({
    where: {
      isActive: true,
      ...(serviceType ? { serviceType } : {}),
    },
    orderBy: [{ serviceType: "asc" }, { distanciaMinKm: "asc" }],
  });
}

/**
 * Desactiva un rango de precios (Soft Delete) para auditoría.
 */
export async function deactivatePriceRange(id: string, updatedBy?: string) {
  return await prisma.priceRange.update({
    where: { id },
    data: {
      isActive: false,
      updatedBy,
    },
  });
}
