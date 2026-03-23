import { Account } from "@prisma/client";
import prisma from "../../../../prisma/client";

export const fetchAllAccounts = async (): Promise<Account[]> => {
    return prisma.account.findMany();
}

export const createAccount = async (accountData: {
    role: string,
    name: string,
    accountNumber: string,
    balance: number
}): Promise<Account> => {

    const newAccount: Account = await prisma.account.create({
        data: {
            ...accountData
        }
    });

    return newAccount;
}

export const updateAccount = async (
    id: number,
    account: {
        role: string,
        name: string,
        accountNumber: string,
        balance: number
    }
): Promise<Account> => {

    const updatedAccount = await prisma.account.update({
        where: {
            id: id
        },
        data: {
            ...account
        }
    });

    return updatedAccount;
}

export const deleteAccount = async (id: number): Promise<void> => {
    await prisma.account.delete({
        where: {
            id: id
        }
    });
}