import express, { Router } from "express";
import * as accountController from "../controllers/accountsController";
import { validateRequest } from "../middleware/validation";
import { accountSchemas } from "../validations/accountsValidation";

const accountRouter: Router = express.Router();

// GET /accounts - fetch all accounts
accountRouter.get("/accounts", accountController.getAllAccounts);

// POST /accounts/new - create or upsert account
accountRouter.post("/accounts/new", validateRequest(accountSchemas.createAccount), accountController.createAccount);

// DELETE /accounts/:id - delete account
accountRouter.delete("/accounts/:id", validateRequest(accountSchemas.deleteAccount), accountController.deleteAccount);

export default accountRouter;