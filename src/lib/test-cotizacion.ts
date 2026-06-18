import "dotenv/config";
import { quoteShipment } from "./actions-cotizacion";
import { ServiceTypeEnum } from "@/generated/prisma/client";

async function runTests() {
  console.log("=== INICIANDO PRUEBAS DE COTIZACIONES ===");

  const testCases = [
    {
      name: "LOW_COST - Rango 0-3 km (Distancia 2.5 km)",
      request: {
        origin: "Constitución 4500",
        destination: "Centro MDP",
        distanceKm: 2.5,
        serviceType: ServiceTypeEnum.LOW_COST,
      },
      expectedPrice: 3000,
    },
    {
      name: "LOW_COST - Rango 3-5 km (Distancia 4.0 km)",
      request: {
        origin: "Constitución 4500",
        destination: "Puerto MDP",
        distanceKm: 4.0,
        serviceType: ServiceTypeEnum.LOW_COST,
      },
      expectedPrice: 4000,
    },
    {
      name: "LOW_COST - Rango 10+ km (Distancia 12.5 km)",
      request: {
        origin: "Constitución 4500",
        destination: "Sierra de los Padres",
        distanceKm: 12.5,
        serviceType: ServiceTypeEnum.LOW_COST,
      },
      expectedPrice: 8750, // 7000 (base) + 2.5 * 700 = 8750
    },
    {
      name: "EXPRESS - Rango 5-7 km (Distancia 5.0 km)",
      request: {
        origin: "Luro 3200",
        destination: "Constitución 6000",
        distanceKm: 5.0,
        serviceType: ServiceTypeEnum.EXPRESS,
      },
      expectedPrice: 6100,
    },
    {
      name: "EXPRESS - Rango 10+ km (Distancia 15.0 km)",
      request: {
        origin: "Luro 3200",
        destination: "Batán",
        distanceKm: 15.0,
        serviceType: ServiceTypeEnum.EXPRESS,
      },
      expectedPrice: 13200, // 8200 (base) + 5.0 * 1000 = 13200
    },
    {
      name: "PUNTO_DE_RETIRO - Rango Fijo 0-15 km (Distancia 12.0 km)",
      request: {
        origin: "Punto Central",
        destination: "Punto Sucursal 2",
        distanceKm: 12.0,
        serviceType: ServiceTypeEnum.PUNTO_DE_RETIRO,
      },
      expectedPrice: 100,
    },
  ];

  for (const tc of testCases) {
    try {
      const result = await quoteShipment(tc.request);
      const isCorrect = result.precioFinal === tc.expectedPrice;
      console.log(`[PASS] ${tc.name}`);
      console.log(`       -> Precio Final: $${result.precioFinal} (Esperado: $${tc.expectedPrice})`);
      console.log(`       -> Desglose: Base $${result.desglose.precioBase}, Excedente $${result.desglose.excedentes}, Km Excedente ${result.desglose.kmExcedentes}`);
      console.log(`       -> Duración Estimada: ${result.duracionEstimada}`);
      if (!isCorrect) {
        console.error(`[FAIL] Discrepancia de precio para ${tc.name}`);
      }
    } catch (err: any) {
      console.error(`[ERROR] Test ${tc.name} falló con error:`, err.message);
    }
  }

  // Test error validation
  console.log("\n=== PRUEBA DE VALIDACIÓN DE ERRORES ===");
  try {
    await quoteShipment({
      origin: "",
      destination: "Centro",
      distanceKm: -5,
      serviceType: ServiceTypeEnum.LOW_COST,
    });
    console.error("[FAIL] Se esperaba error de validación para distancia negativa u origen vacío");
  } catch (err: any) {
    console.log(`[PASS] Excepción capturada correctamente: "${err.message}"`);
  }

  console.log("\n=== FIN DE PRUEBAS ===");
}

runTests();
