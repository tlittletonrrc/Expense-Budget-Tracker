import { PrismaClient } from "@prisma/client";
import { AccountsSeedData, AllocationSeedData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
  // Clear existing accounts
    await prisma.account.deleteMany();
    await prisma.allocation.deleteMany();

    // insert terms to db
    const createdAccounts = await prisma.account.createMany(
        {
            data: AccountsSeedData,
            skipDuplicates: true
        }
    );

    const createAllocations = await prisma.allocation.createMany(
        {
            data: AllocationSeedData,
            skipDuplicates: true
        }
    );
    console.log(`Created ${createAllocations.count} allocations.`);
    console.log(`Created ${createdAccounts.count} accounts.`);
};



main().then(
    async() => {
        await prisma.$disconnect()
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}); 