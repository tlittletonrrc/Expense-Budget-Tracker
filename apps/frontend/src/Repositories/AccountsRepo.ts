import type { BankAccount } from "../Types/BankAccount";

let accounts: BankAccount[] = [];

export function getAllAccounts(): BankAccount[] {
    return accounts;
}

export function createAccount(newAccount: BankAccount) {
    accounts.push(newAccount);
}

export function updateAccount(newAccount: BankAccount) {
    accounts = accounts.map(a =>
        a.accountNumber === newAccount.accountNumber ? { ...a, ...newAccount } : a
    );
}

export function deleteAccount(index: number) {
    accounts = accounts.filter((_, i) => i !== index);
}