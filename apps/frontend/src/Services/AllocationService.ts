import type { Allocation } from "@shared/types/Allocation";
import type { NewAllocation } from "@shared/types/NewAllocation";
import * as repo from "../Repositories/AllocationRepository"


export async function getAllocationByUserIDService(UserID: string):Promise<Allocation[]> {
    const user = await repo.getAllocationByUser(UserID)
    
    if (!user) {
        throw new Error("No user by that id")
    }

    return user
}


export async function createAllocationService(NewAllocation: NewAllocation) {
    if (!NewAllocation.userID || !NewAllocation.amount || !NewAllocation.category || !NewAllocation.date) {
        throw new Error("Missing allocation fields")
    }

    const createdAllocation = repo.createAllocation(NewAllocation)
    return createdAllocation
    
}


export async function updateAllocationService(NewAllocation: Allocation) {
    if (!NewAllocation.userID || !NewAllocation.allocation_id || !NewAllocation.amount || !NewAllocation.category || !NewAllocation.date) {
        throw new Error("Missing allocation fields")
    }

    const updatedAllocation = repo.updateAllocation(NewAllocation)
    return updatedAllocation
    
}


export async function deleteAllocationService(allocation_id: number) {

    if (!allocation_id) {
        throw new Error("Missing allocation id")
    }

    repo.deleteAllocation(allocation_id)
}