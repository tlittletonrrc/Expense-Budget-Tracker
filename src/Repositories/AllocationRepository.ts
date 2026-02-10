import users from "../Data/user.json"
import type { UserType } from "../Types/UserType"
import type { userData } from "../Types/userData"
import * as userService from "../Services/UserService"


export function getAllUsers(): userData {
    return users 
}

export const GetUserByID = (UserID: string): UserType | undefined => {
    const user = users.users.find(u => u.userID === UserID)

    return user
}

export function updateAllocation(UserID: string, newAllocation: { category: string; amount: number; date: string } ): UserType {
    
    const user = userService.getUserByIDService(UserID)

    user.allocations = user.allocations.map(a =>
        a.category === newAllocation.category
            ? { ...a, amount: newAllocation.amount, date: newAllocation.date }: a
    );
    
    return user; 
}

export function createAllocation(UserID: string, newAllocation: { category: string; amount: number; date: string }) {
    const user = userService.getUserByIDService(UserID)

    user.allocations.push(newAllocation);
}