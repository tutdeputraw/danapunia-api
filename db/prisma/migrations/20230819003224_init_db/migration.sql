-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "organizationAdminId" INTEGER,
    "pendharmaPuniaId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationAdmin" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "OrganizationAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PendharmaPunia" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "PendharmaPunia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_organizationAdminId_fkey" FOREIGN KEY ("organizationAdminId") REFERENCES "OrganizationAdmin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pendharmaPuniaId_fkey" FOREIGN KEY ("pendharmaPuniaId") REFERENCES "PendharmaPunia"("id") ON DELETE SET NULL ON UPDATE CASCADE;
