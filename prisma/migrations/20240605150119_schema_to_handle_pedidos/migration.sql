-- CreateEnum
CREATE TYPE "Enum_Movement_State" AS ENUM ('PENDIENTE', 'COCINANDO', 'ENVIADO');

-- AlterTable
ALTER TABLE "InventoryMovement" ADD COLUMN     "state" "Enum_Movement_State";
