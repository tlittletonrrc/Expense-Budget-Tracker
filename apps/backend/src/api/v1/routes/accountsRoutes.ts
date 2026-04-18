import express, { Router } from "express";
import * as accountController from "../controllers/accountsController";
import { validateRequest } from "../middleware/validation";
import { accountSchemas } from "../validations/accountsValidation";
import { requireAuth } from "@clerk/express";

const accountRouter: Router = express.Router();

// GET /accounts - fetch all accounts
accountRouter.get("/accounts/:userID", requireAuth(), validateRequest(accountSchemas.getAccountsByUser), accountController.getAllAccounts);

// POST /accounts/new - create or upsert account
accountRouter.post("/accounts/new", requireAuth(), validateRequest(accountSchemas.createAccount), accountController.createAccount);

// DELETE /accounts/:id - delete account
accountRouter.delete("/accounts/:id", requireAuth(), validateRequest(accountSchemas.deleteAccount), accountController.deleteAccount);

export default accountRouter;