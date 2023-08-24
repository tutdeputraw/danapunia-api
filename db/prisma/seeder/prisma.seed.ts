import { PrismaService } from "src/_common/prisma/service/prisma.service";

const prisma = new PrismaService();

async function seedDatabase() {
    try {
        const roles = await prisma.role.createMany({
            data: [
                { name: 'Organization Admin' },
                { name: 'Pendharma Punia' },
            ],
        });

        const users = await prisma.user.createMany({
            data: [
                {
                    email: 'admin@example.com',
                    password: 'admin123',
                    name: 'Admin User',
                    // roleId: (await this.roleRepository.getRole({ name: 'Organization Admin' })).id
                    roleId: roles[0].id
                },
                {
                    email: 'user@example.com',
                    password: 'user123',
                    name: 'Regular User',
                    // roleId: (await this.roleRepository.getRole({ name: 'Pendharma Punia' })).id,
                    roleId: roles[1].id
                },
            ],
        });

        const pura = await prisma.pura.createMany({
            data: [
                {
                    name: 'Jala Sidhi Amerta',
                    address: 'Jl. Raya Bandara Juanda No.10 A, Semambung, Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61253',
                },
            ],
        });

        const organizations = await prisma.organization.create({
            data: {
                name: 'Sanggar Tari',
                pura: { connect: { id: pura[0].id } }
            }
        });

        const organizationAdmins = await prisma.organizationAdmin.createMany({
            data: [
                {
                    ktpId: 123456789,
                    userId: users[0].id,
                    organizationId: organizations[0].id,
                },
            ],
        });

        const pendharmaPuniaGroups = await prisma.pendharmaPunia.createMany({
            data: [
                {
                    userId: users[1].id,
                },
            ],
        });

        const programs = await prisma.program.createMany({
            data: [
                {
                    name: 'Sample Program',
                    deadline: new Date('2023-12-31'),
                    moneyTargets: 10000.0,
                    organizationId: organizations[0].id,
                },
            ],
        });

        const programProgress = await prisma.programProgress.createMany({
            data: [
                {
                    title: 'Update 1',
                    description: 'First progress update',
                    programId: programs[0].id,
                },
            ],
        });

        const bankAccounts = await prisma.bankAccount.createMany({
            data: [
                {
                    name: 'Bank Account 1',
                    accountNumber: '1234567890',
                    organizationId: organizations[0].id,
                },
            ],
        });

        const puniaTransactions = await prisma.punia.createMany({
            data: [
                {
                    programId: programs[0].id,
                    pendharmaPuniaId: pendharmaPuniaGroups[0].id,
                    bankAccountId: bankAccounts[0].id,
                    money: 500.0,
                },
            ],
        });

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seedDatabase();
