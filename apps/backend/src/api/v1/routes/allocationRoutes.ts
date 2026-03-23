import express, {Router} from "express";
import * as allocationController from "../controllers/allocationController";

const allocationRouter: Router = express.Router()

allocationRouter.get("/allocations/:id", allocationController.getAllocationByUser)
allocationRouter.put("/allocations", allocationController.updateAllocation)
allocationRouter.post("/allocations/new", allocationController.createAllocation)
allocationRouter.delete("/allocations/:id", allocationController.deleteAllocation)

export default allocationRouter;