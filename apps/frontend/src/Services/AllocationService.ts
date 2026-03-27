import type { Allocation } from "@shared/types/Allocation";
import type { NewAllocation } from "@shared/types/NewAllocation";
import * as repo from "../Repositories/AllocationRepository"


export async function getAllocationByUserIDService(UserID: string):Promise<Allocation[]> {
    try{
        const allocations = await repo.getAllocationByUser(UserID)
        
        if (!allocations) {
            throw new Error("No user by that id")
        }
    
        return allocations
    } catch {
        throw new Error("Error fetching users allocations.")
    }
}


export async function createAllocationService(NewAllocation: NewAllocation) {
    try {
        if (!NewAllocation.userID || !NewAllocation.amount || !NewAllocation.category || !NewAllocation.date) {
            throw new Error("Missing allocation fields")
        }
    
        const createdAllocation = repo.createAllocation(NewAllocation)
        return createdAllocation
    } catch {
        throw new Error("Error creating new service.")
    }
    
}


export async function updateAllocationService(NewAllocation: Allocation) {
    try {
        if (!NewAllocation.userID || !NewAllocation.allocation_id || !NewAllocation.amount || !NewAllocation.category || !NewAllocation.date) {
            throw new Error("Missing allocation fields")
        }
    
        const updatedAllocation = repo.updateAllocation(NewAllocation)
        return updatedAllocation
    } catch{
        throw new Error("Error updating allocation.")
    }
    
}


export async function deleteAllocationService(allocation_id: number) {
    try{
        if (!allocation_id) {
            throw new Error("Missing allocation id")
        }
    
        repo.deleteAllocation(allocation_id)
    } catch {
        throw new Error("Unable to delete allocation")
    }
}