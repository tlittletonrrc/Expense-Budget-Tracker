import express, {Router} from "express";
import * as userController from "../controllers/userController"
import { validateRequest } from "../middleware/validation";
import { userSchemas } from "../validations/userValidations";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";

const userRouter: Router = express.Router()

userRouter.get("/user/:id", requireAuth(), findOrCreateUser, validateRequest(userSchemas.getUserByID), userController.getUserByID)
userRouter.post("/user/new", requireAuth(), validateRequest(userSchemas.createUser), userController.createUser)
userRouter.put("/user/update", requireAuth(), validateRequest(userSchemas.updateUser), userController.updateUser)

export default userRouter;