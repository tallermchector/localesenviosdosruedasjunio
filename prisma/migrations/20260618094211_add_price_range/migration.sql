-- CreateEnum
CREATE TYPE "ServiceTypeEnum" AS ENUM ('EXPRESS', 'LOW_COST', 'PUNTO_DE_RETIRO');

-- CreateEnum
CREATE TYPE "OrderStatusEnum" AS ENUM ('PENDIENTE', 'EN_CURSO', 'ENTREGADO', 'CANCELADO');

-- CreateTable
CREATE TABLE "PriceRange" (
    "id" TEXT NOT NULL,
    "serviceType" "ServiceTypeEnum" NOT NULL,
    "distanciaMinKm" DECIMAL(10,2) NOT NULL,
    "distanciaMaxKm" DECIMAL(10,2) NOT NULL,
    "precioRango" DECIMAL(12,2) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT,
    "metadata" JSONB,
    "createdBy" TEXT,
    "updatedBy" TEXT,

    CONSTRAINT "PriceRange_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PriceRange_serviceType_isActive_idx" ON "PriceRange"("serviceType", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "PriceRange_serviceType_distanciaMinKm_distanciaMaxKm_key" ON "PriceRange"("serviceType", "distanciaMinKm", "distanciaMaxKm");
