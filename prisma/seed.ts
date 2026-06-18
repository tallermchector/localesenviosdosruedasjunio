import "dotenv/config";
import { PrismaClient, ServiceTypeEnum } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Starting seed script...");

  // Clean existing data
  await prisma.priceRange.deleteMany();
  console.log("Cleared existing PriceRanges.");

  const priceRanges = [
    // LOW_COST
    {
      serviceType: ServiceTypeEnum.LOW_COST,
      distanciaMinKm: 0,
      distanciaMaxKm: 3,
      precioRango: 3000,
      descripcion: "LOW_COST: 0 a 3 km",
    },
    {
      serviceType: ServiceTypeEnum.LOW_COST,
      distanciaMinKm: 3,
      distanciaMaxKm: 5,
      precioRango: 4000,
      descripcion: "LOW_COST: 3 a 5 km",
    },
    {
      serviceType: ServiceTypeEnum.LOW_COST,
      distanciaMinKm: 5,
      distanciaMaxKm: 7,
      precioRango: 5300,
      descripcion: "LOW_COST: 5 a 7 km",
    },
    {
      serviceType: ServiceTypeEnum.LOW_COST,
      distanciaMinKm: 7,
      distanciaMaxKm: 10,
      precioRango: 7000,
      descripcion: "LOW_COST: 7 a 10 km (Precio base)",
    },
    {
      serviceType: ServiceTypeEnum.LOW_COST,
      distanciaMinKm: 10,
      distanciaMaxKm: 9999,
      precioRango: 700,
      descripcion: "LOW_COST: km adicional excedente (10+ km)",
    },

    // EXPRESS
    {
      serviceType: ServiceTypeEnum.EXPRESS,
      distanciaMinKm: 0,
      distanciaMaxKm: 3,
      precioRango: 3700,
      descripcion: "EXPRESS: 0 a 3 km",
    },
    {
      serviceType: ServiceTypeEnum.EXPRESS,
      distanciaMinKm: 3,
      distanciaMaxKm: 5,
      precioRango: 4600,
      descripcion: "EXPRESS: 3 a 5 km",
    },
    {
      serviceType: ServiceTypeEnum.EXPRESS,
      distanciaMinKm: 5,
      distanciaMaxKm: 7,
      precioRango: 6100,
      descripcion: "EXPRESS: 5 a 7 km",
    },
    {
      serviceType: ServiceTypeEnum.EXPRESS,
      distanciaMinKm: 7,
      distanciaMaxKm: 10,
      precioRango: 8200,
      descripcion: "EXPRESS: 7 a 10 km (Precio base)",
    },
    {
      serviceType: ServiceTypeEnum.EXPRESS,
      distanciaMinKm: 10,
      distanciaMaxKm: 9999,
      precioRango: 1000,
      descripcion: "EXPRESS: km adicional excedente (10+ km)",
    },

    // PUNTO_DE_RETIRO
    {
      serviceType: ServiceTypeEnum.PUNTO_DE_RETIRO,
      distanciaMinKm: 0,
      distanciaMaxKm: 15,
      precioRango: 100,
      descripcion: "PUNTO_DE_RETIRO: Precio fijo 0 a 15 km",
    },
  ];

  for (const range of priceRanges) {
    await prisma.priceRange.create({
      data: {
        serviceType: range.serviceType,
        distanciaMinKm: range.distanciaMinKm,
        distanciaMaxKm: range.distanciaMaxKm,
        precioRango: range.precioRango,
        descripcion: range.descripcion,
        isActive: true,
      },
    });
  }

  console.log("Successfully seeded PriceRanges!");
}

main()
  .catch((e) => {
    console.error("Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
