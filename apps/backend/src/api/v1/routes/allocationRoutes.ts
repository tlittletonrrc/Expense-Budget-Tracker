import express, {Router} from "express";
import * as allocationController from "../controllers/allocationController";
import { validateRequest } from "../middleware/validation";
import { allocationSchemas } from "../validations/allocationValidation";

const allocationRouter: Router = express.Router()

allocationRouter.get("/allocations/:id", validateRequest(allocationSchemas.getAllocationByUser), allocationController.getAllocationByUser)
allocationRouter.put("/allocations", validateRequest(allocationSchemas.updateAllocation), allocationController.updateAllocation)
allocationRouter.post("/allocations/new", validateRequest(allocationSchemas.createAllocation), allocationController.createAllocation)
allocationRouter.delete("/allocations/:id", validateRequest(allocationSchemas.deleteAllocation), allocationController.deleteAllocation)

export default allocationRouter;