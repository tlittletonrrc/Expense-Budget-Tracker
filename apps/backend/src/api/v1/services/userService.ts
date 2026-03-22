import users from "../TempData/user.json"
//import type { userData } from "@shared/types/userData"
import type { UserType } from "@shared/types/UserType"

// export function getAllUsers(): userData {
//     return users 
// }

export const GetUserByID = (UserID: string): UserType | undefined => {
    const user = users.users.find(u => u.userID === UserID)

    return user
}