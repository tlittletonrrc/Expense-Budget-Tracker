import type { Request, Response } from "express";
import * as accountService from "../services/accountsService";
import type { Account } from "@prisma/client";

export async function getAllAccounts(_req: Request, res: Response): Promise<void> {
    try {
        const accounts: Account[] = await accountService.fetchAllAccounts();
        res.status(200).json(accounts);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function createAccount(req: Request, res: Response): Promise<void> {
    try {
        const newAccount = await accountService.createAccount(req.body);
        res.status(201).json(newAccount);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function updateAccount(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    try {
        const updatedAccount = await accountService.updateAccount(id, req.body);
        res.status(200).json(updatedAccount);
    } catch (error: any) {
        res.status(500).json({
            Error: "Unable to update Accounts"
        })
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