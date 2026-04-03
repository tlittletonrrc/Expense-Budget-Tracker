import express, {Router} from "express";
import * as allocationController from "../controllers/allocationController";
import { validateRequest } from "../middleware/validation";
import { allocationSchemas } from "../validations/allocationValidation";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";

const allocationRouter: Router = express.Router()

allocationRouter.get("/allocations/:id", requireAuth(), /*findOrCreateUser,*/ validateRequest(allocationSchemas.getAllocationByUser), allocationController.getAllocationByUser)
allocationRouter.put("/allocations", requireAuth(), findOrCreateUser, validateRequest(allocationSchemas.updateAllocation), allocationController.updateAllocation)
allocationRouter.post("/allocations/new", requireAuth(), /*findOrCreateUser,*/ validateRequest(allocationSchemas.createAllocation), allocationController.createAllocation)
allocationRouter.delete("/allocations/:id", requireAuth(), findOrCreateUser, validateRequest(allocationSchemas.deleteAllocation), allocationController.deleteAllocation)

export default allocationRouter;