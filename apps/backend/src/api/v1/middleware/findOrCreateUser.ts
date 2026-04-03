import { User } from "@prisma/client";
import * as userService from "../services/userService";
import { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";
import { clerkClient } from "@clerk/express";

/**
 * If a sessionToken is included in Authorization header, get userId from Clerk
 * If user does not exist, add user to back-end database
 */
export const findOrCreateUser = async(
    req: Request,
    _res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const auth = getAuth(req);
        const userId = auth.userId;
        
        // Stores new user with empty info
        if(userId) {
            let backendUser : User|null = await userService.GetUserByID(userId);
            if(!backendUser) {
                const clerkUser = await clerkClient.users.getUser(userId);
                const name = String(clerkUser.fullName)
                
                backendUser= await userService.createUser({
                    userID: userId,
                    name: name,
                    balance: 0,
                    savingsGoal: 0
                });
            }
        }
        
        // If userId not found with auth, set userId to null 
        // Prevents userId from being included erroneously in the request body
        // req.userId = userId;
        next();
    } catch(error) {
        next(error);
    }
}