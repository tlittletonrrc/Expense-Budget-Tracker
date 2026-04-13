import type { BankAccount } from "@shared/types/BankAccounts";
import prisma from "../../../../prisma/client";

export async function fetchAllAccounts (UserID: string): Promise<BankAccount[]> {
    return prisma.account.findMany({ where: { userID: UserID } });
}

export const createOrUpdateAccount = async (accountData: {
    userID: string;
    role: string,
    name: string,
    accountNumber: string,
    balance: number
}): Promise<BankAccount> => {
    const existingAccount = await prisma.account.findFirst({
        where: {
            userID: accountData.userID,
            role: accountData.role,
            name: accountData.name,
            accountNumber: accountData.accountNumber
        }
    });

    if (existingAccount) {
        // Update existing account
        return prisma.account.update({
            where: { id: existingAccount.id },
            data: { balance: accountData.balance }
        });
    } else {
        // Create new account
        return prisma.account.create({
            data: { ...accountData }
        });
    }
}

export const deleteAccount = async (id: number): Promise<void> => {
    await prisma.account.delete({
        where: {
            id: id
        }
    });
}