import express, {Router} from "express";
import * as userController from "../controllers/userController"

const userRouter: Router = express.Router()

userRouter.get("/user/:id", userController.getUserByID)

export default userRouter;