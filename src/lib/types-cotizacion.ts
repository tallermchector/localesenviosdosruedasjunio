import { ServiceTypeEnum } from "@/generated/prisma/client";

export interface QuoteRequest {
  origin: string;
  destination: string;
  distanceKm: number;
  serviceType: ServiceTypeEnum;
}

export interface PriceCalculationDetails {
  precioBase: number;
  excedentes: number;
  precioAdicionalPorKm: number;
  kmExcedentes: number;
  esPrecioFijo: boolean;
}

export interface QuoteResponse {
  precioFinal: number;
  desglose: PriceCalculationDetails;
  duracionEstimada: string;
}

export interface PriceRangeConfig {
  id?: string;
  serviceType: ServiceTypeEnum;
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  isActive: boolean;
  descripcion?: string;
  metadata?: any;
}
