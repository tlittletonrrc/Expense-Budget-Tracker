//import type { UserType } from "../Types/UserType";
import * as repo from "../Repositories/AllocationRepository"


export function getAllUserService() {
    const users = repo.getAllUsers()

    if (!users) {
        throw new Error("No Users Found")
    }

    return users
}

export function getUserByIDService(UserID: string) {
    const user = repo.GetUserByID(UserID)

    if (!user) {
        throw new Error("No user exists by that id")
    }

    return user
}
