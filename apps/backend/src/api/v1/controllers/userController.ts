import { Request, Response } from "express";
import * as userService from "../services/userService"

export const getUserByID = async (req: Request, res: Response) => {
    try {
        const userID = String(req.params.id)
        const user = userService.GetUserByID(userID)

        res.status(200).json({user: user})
    } catch {
        res.status(500).json({
            Error: "Unable to retrieve user"
        })
    }
}