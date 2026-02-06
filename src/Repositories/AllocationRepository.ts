import type { UserType } from "../Types/UserType"
import users from "../Data/user.json"

export function getAllAllocations(): UserType {
    return users
}