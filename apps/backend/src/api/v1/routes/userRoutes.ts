import express, {Router} from "express";
import * as userController from "../controllers/userController"

const userRouter: Router = express.Router()

userRouter.get("/user/:id", userController.getUserByID)
userRouter.post("/user/new", userController.createUser)
userRouter.put("/user/update", userController.updateUser)

export default userRouter;