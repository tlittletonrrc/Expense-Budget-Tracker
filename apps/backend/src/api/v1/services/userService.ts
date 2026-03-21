import type { UserType } from "@shared/types/UserType"
import type { NewUser} from "@shared/types/NewUser"
import prisma from "../../../../prisma/client";


export const GetUserByID = async (UserID: string): Promise<UserType> => {
    const user = await prisma.user.findUnique({
        where: {
            userID: UserID
        }
    })

    if (!user) {
        throw new Error("Unable to find user by that id.")
    }

    return user
}


export const createUser = async (newUser: NewUser): Promise<UserType> => {
    return await prisma.user.create({
        data: newUser
    })
}


export const updateUser = async (updatedUser: UserType): Promise<UserType> => {
    return await prisma.user.update({
            where: {userID: updatedUser.userID},
            data: {
                name: updatedUser.name,
                email: updatedUser.email,
                password: updatedUser.password,
                balance: updatedUser.balance,
                savingsGoal: updatedUser.savingsGoal
            }
        })
}