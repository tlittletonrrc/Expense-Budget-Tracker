import type { Allocation } from "../Types/Allocation";
//import type { UserType } from "../Types/UserType";
import * as repo from "../Repositories/AllocationRepository"
import * as userService from "./UserService"



export function getAllocationByUserIDService(UserID: string) {
    const user = userService.getUserByIDService(UserID)
    
    if (!user) {
        throw new Error("No user by that id")
    }

    return user
}


export function createAllocationService(UserID: string, NewAllocation: Allocation) {
    const user = userService.getUserByIDService(UserID)
    const exists = user.allocations.some(a => a.category === NewAllocation.category);

    if (!NewAllocation.amount || !NewAllocation.category || !NewAllocation.date) {
        throw new Error("Missing input.")
    }

    if (!exists){
        repo.createAllocation(UserID, NewAllocation)
    } else {
        repo.updateAllocation(UserID, NewAllocation)
    }
}


export function deleteAllocationService(userID:string, index:number) {
    if (!userID) {
        throw new Error("Missing or invalid UserID")
    }

    repo.deleteAllocation(userID, index)

}