import type { Allocation } from "@shared/types/Allocation"
import prisma from "../../../../prisma/client";


export async function getAllocationByUser(UserID: string): Promise<Allocation[]> {
    try{
        const userAllocations = await prisma.allocation.findMany({
            where: {
                userID: UserID
            }
        })
        return userAllocations
    } catch {
        throw new Error("Error fetching allocations.")
    }
}


export async function updateAllocation(newAllocation: Allocation ): Promise<Allocation> {  
    try{
        return await prisma.allocation.update({
            where: {allocation_id: newAllocation.allocation_id},
            data: {
                category: newAllocation.category,
                amount: newAllocation.amount,
                date: newAllocation.date
            }
        })
    } catch {
        throw new Error("Error updating allocation.")
    }
}


export async function createAllocation(newAllocation: Allocation) {
    try {
        return await prisma.allocation.create({
            data: newAllocation
        })
    } catch {
        throw new Error("Unable to create new allocation.")
    }
}


export async function deleteAllocation(allocation_id: number) {
    try {
        return await prisma.allocation.delete({
            where: {allocation_id}
        })
    } catch {
        throw new Error("Error deleting allocation.")
    }
}