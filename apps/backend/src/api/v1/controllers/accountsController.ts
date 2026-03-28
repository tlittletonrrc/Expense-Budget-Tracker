import type { Request, Response } from "express";
import * as accountService from "../services/accountsService";
import type { BankAccount } from "@shared/types/BankAccounts";

export async function getAllAccounts(_req: Request, res: Response): Promise<void> {
    try {
        const accounts: BankAccount[] = await accountService.fetchAllAccounts();
        res.status(200).json(accounts);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function createAccount(req: Request, res: Response): Promise<void> {
    try {
        const account = await accountService.createOrUpdateAccount(req.body);
        res.status(200).json(account); // 200 because it may have been updated
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteAccount(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    try {
        await accountService.deleteAccount(id);
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({
            Error: "Unable to delete Accounts"
        })
    }
}