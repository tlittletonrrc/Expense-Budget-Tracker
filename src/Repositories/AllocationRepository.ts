import * as userService from "../Services/UserService"

import type { UserType } from "../Types/UserType"
import type { Allocation } from "../Types/Allocation"



export function getAllocationByUser(UserID: string): Allocation[] {
    const user = userService.getUserByIDService(UserID)
    return user.allocations
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


export function deleteAllocation(UserID: string, index: number): UserType {
    const user = userService.getUserByIDService(UserID)
    user.allocations = user.allocations.filter((_, i) => i !== index);

    return user;
}
