import * as repo from "../Repositories/UserRepository"


export function getUserByIDService(UserID: string) {
    const user = repo.getUserByID(UserID)

    if (!user) {
        throw new Error("No user exists by that id")
    }

    return user
}
