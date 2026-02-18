import users from "../Data/user.json"
import type { userData } from "../Types/userData"
import type { UserType } from "../Types/UserType"


export function getAllUsers(): userData {
    return users 
}

export const GetUserByID = (UserID: string): UserType | undefined => {
    const user = users.users.find(u => u.userID === UserID)

    return user
}