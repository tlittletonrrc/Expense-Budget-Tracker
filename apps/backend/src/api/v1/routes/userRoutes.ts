import express, {Router} from "express";
import * as userController from "../controllers/userController"
import { validateRequest } from "../middleware/validation";
import { userSchemas } from "../validations/userValidations";

const userRouter: Router = express.Router()

userRouter.get("/user/:id", validateRequest(userSchemas.getUserByID), userController.getUserByID)
userRouter.post("/user/new", validateRequest(userSchemas.createUser), userController.createUser)
userRouter.put("/user/update", validateRequest(userSchemas.updateUser), userController.updateUser)

export default userRouter;