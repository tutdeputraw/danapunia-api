-- AlterTable
ALTER TABLE "Program" ADD COLUMN     "organizationAdminId" INTEGER;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_organizationAdminId_fkey" FOREIGN KEY ("organizationAdminId") REFERENCES "OrganizationAdmin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
