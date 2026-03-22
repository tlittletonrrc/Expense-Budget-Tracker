import express, { Router } from "express";
import * as accountController from "../controllers/accountsController";

const accountRouter: Router = express.Router();

accountRouter.get("/accounts", accountController.getAllAccounts);
accountRouter.post("/accounts/new", accountController.createAccount);
accountRouter.put("/accounts/:id", accountController.updateAccount);
accountRouter.delete("/accounts/:id", accountController.deleteAccount);

export default accountRouter;