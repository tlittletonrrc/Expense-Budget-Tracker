import { Request, Response } from "express";
import * as userService from "../services/userService"


export const getUserByID = async (req: Request, res: Response) => {
    try {
        const userID = String(req.params.id)
        const user = await userService.GetUserByID(userID)

        res.status(200).json({user: user})
    } catch {
        res.status(500).json({Error: "Unable to retrieve user"})
    }
}


export const createUser = async (req: Request, res: Response) => {
    try{
        const newUser = req.body
        const user = await userService.createUser(newUser)
        res.status(200).json({user})
    } catch {
        res.status(500).json({Error: "Unable to create user"})
    }
}


export const updateUser = async (req: Request, res: Response) => {
    try{
        const updatedUser = req.body
        const user = await userService.updateUser(updatedUser)

        res.status(200).json({user})

    } catch {
        res.status(500).json({Error: "Unable to update user"})
    }
}