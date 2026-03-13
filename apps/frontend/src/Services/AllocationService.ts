import type { Allocation } from "@shared/types/Allocation";
//import type { UserType } from "@shared/types/UserType";
import * as repo from "../Repositories/AllocationRepository"
//import * as userService from "./UserService"



export async function getAllocationByUserIDService(UserID: string):Promise<Allocation[]> {
    const user = await repo.getAllocationByUser(UserID)
    
    if (!user) {
        throw new Error("No user by that id")
    }

    return user
}


export async function createAllocationService(NewAllocation: Allocation) {
    if (!NewAllocation.userID || !NewAllocation.allocation_id || !NewAllocation.amount || !NewAllocation.category || !NewAllocation.date) {
        throw new Error("Missing allocation fields")
    }

    //const user = userService.getUserByIDService(UserID)
    const UserID = String(NewAllocation.userID)
    const allocations = await repo.getAllocationByUser(UserID)
    const exists = allocations.some(a => a.category === NewAllocation.category);

    // if (!exists) {
    //     throw new Error("User Not Found.")
    // }

    if (!exists){
        repo.createAllocation(NewAllocation)
    } else {
        repo.updateAllocation(NewAllocation)
    }
}


export async function deleteAllocationService(/*userID:string,*/ allocation_id: string) {
    // if (!userID) {
    //     throw new Error("Missing or invalid UserID")
    // }
    //const allocations = await repo.getAllocationByUser(userID)

    if (!allocation_id) {
        throw new Error("Missing allocation id")
    }

    repo.deleteAllocation(allocation_id)
}