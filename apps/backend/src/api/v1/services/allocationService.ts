import type { Allocation } from "@shared/types/Allocation"
import prisma from "../../../../prisma/client";


export async function getAllocationByUser(UserID: string): Promise<Allocation[]> {
    const userAllocations = await prisma.allocation.findMany({
        where: {
            userID: UserID
        }
    })
    return userAllocations
}


export async function updateAllocation(newAllocation: Allocation ): Promise<Allocation> {  
    return await prisma.allocation.update({
        where: {allocation_id: newAllocation.allocation_id},
        data: {
            category: newAllocation.category,
            amount: newAllocation.amount,
            date: newAllocation.date
        }
    })
}


export async function createAllocation(newAllocation: Allocation) {
    return await prisma.allocation.create({
        data: newAllocation
    })
}


export async function deleteAllocation(allocation_id: number) {
    return await prisma.allocation.delete({
        where: {allocation_id}
    })
}