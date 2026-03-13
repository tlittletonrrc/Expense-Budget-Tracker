import type { Allocation } from "@shared/types/Allocation"
import allocations from "../TempData/allocations.json"


export async function getAllocationByUser(UserID: string): Promise<Allocation[]> {
    const userAllocations = allocations.filter(a => a.userID === UserID)
    return userAllocations
}


export async function updateAllocation(newAllocation: Allocation ): Promise<Allocation> {  
    const allocation = allocations.find(a => a.userID === newAllocation.userID && a.category === newAllocation.category);

    if (!allocation) {
        throw new Error("Allocation not found");
    }

    allocation.category = newAllocation.category;
    allocation.amount = newAllocation.amount;
    allocation.date = newAllocation.date;

    return allocation;
}


export async function createAllocation(newAllocation: Allocation) {
    try {
        allocations.push(newAllocation);
    } catch {
        throw new Error("Unable to create new allocation.")
    }
}


export async function deleteAllocation(allocation_id: string) {
    const index = allocations.findIndex(a => a.allocation_id === allocation_id); 

    if (index === -1) {
        throw new Error("Allocation not found");
    }

    allocations.splice(index, 1);
}