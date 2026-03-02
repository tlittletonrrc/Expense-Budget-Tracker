import * as repo from "../Repositories/AccountsRepo";

export function createAccountService(newAccount: {
    role: string;
    name: string;
    accountNumber: string;
    balance: number;
}) {
    if (!newAccount.accountNumber || !newAccount.name) {
        throw new Error("Missing required account information.");
    }

    const exists = repo.getAllAccounts().some(a => a.accountNumber === newAccount.accountNumber);

    if (!exists) {
        repo.createAccount(newAccount);
    } else {
        repo.updateAccount(newAccount);
    }
}

export function deleteAccountService(index: number) {
    repo.deleteAccount(index);
}