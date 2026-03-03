import * as repo from "../Repositories/AccountsRepo";

export interface BankAccount {
    role: string;
    name: string;
    accountNumber: string;
    balance: number;
}

export function createAccountService(newAccount: BankAccount) {
    if (!newAccount.role || !newAccount.name || !newAccount.accountNumber) {
        throw new Error("Missing required account information.");
    }

    if (typeof newAccount.balance !== "number" || isNaN(newAccount.balance)) {
        throw new Error("Balance must be a valid number.");
    }

    const accounts = repo.getAllAccounts();

    const existingIndex = accounts.findIndex(
        account =>
            account.role === newAccount.role &&
            account.name === newAccount.name &&
            account.accountNumber === newAccount.accountNumber
    );

    if (existingIndex !== -1) {
        repo.deleteAccount(existingIndex);
        repo.createAccount(newAccount);
    } else {
        repo.createAccount(newAccount);
    }
}

export function deleteAccountService(index: number) {
    repo.deleteAccount(index);
}