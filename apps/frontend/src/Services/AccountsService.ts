import type { BankAccount } from "@shared/types/BankAccounts";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const ACCOUNT_ENDPOINT = "/accounts";

export async function getAllAccounts(): Promise<BankAccount[]> {
    const response: Response = await fetch(`${BASE_URL}${ACCOUNT_ENDPOINT}`);
    if (!response.ok) {
        throw new Error("Failed to fetch accounts.");
    }

    const json = await response.json();
    return json;
}

export async function createAccount(newAccount: BankAccount): Promise<BankAccount> {
    const response: Response = await fetch(`${BASE_URL}${ACCOUNT_ENDPOINT}/new`, {
        method: "POST",
        body: JSON.stringify(newAccount),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to create new account.");
    }

    const json = await response.json();
    return json;
}

export async function updateAccount(account: BankAccount): Promise<BankAccount> {
    const response: Response = await fetch(`${BASE_URL}${ACCOUNT_ENDPOINT}/${account.id}`, {
        method: "PUT",
        body: JSON.stringify(account),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to update account with ID ${account.id}`);
    }

    const json = await response.json();
    return json;
}

export async function deleteAccount(accountId: number): Promise<void> {
    const response: Response = await fetch(`${BASE_URL}${ACCOUNT_ENDPOINT}/${accountId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to delete account with ID ${accountId}`);
    }
}