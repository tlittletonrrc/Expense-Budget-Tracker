import { useState, useEffect } from "react";
import * as allocationService from "../Services/AllocationService";
import type { Allocation } from "@shared/types/Allocation";
import type { NewAllocation } from "@shared/types/NewAllocation";

export function useAllocations(userID: string) {
    const [allocations, setAllocations] = useState<Allocation[]>([]);
  
    useEffect(() => {
        async function loadAllocations() {
            const data = await allocationService.getAllocationByUserIDService(userID);
            setAllocations(data || []);
        }
        loadAllocations();
    }, [userID]);


    // const addAllocation = async (newAllocation: NewAllocation) => {
    // const createdAllocation = await allocationService.createAllocationService(newAllocation);

    // setAllocations(prev => {
    //     const exists = prev.some(a => a.allocation_id === createdAllocation.allocation_id);
    //     if (exists) {
    //         return prev.map(a =>
    //             a.category === createdAllocation.category
    //                 ? { ...a, amount: createdAllocation.amount, date: createdAllocation.date }
    //                 : a
    //         );
    //     }
    //     return [...prev, createdAllocation];
    //     });
    // };

    const addAllocation = async (newAllocation: NewAllocation) => {
        const createdAllocation = await allocationService.createAllocationService(newAllocation);
        setAllocations(prev => [...prev, createdAllocation]);
    };

    const updateAllocation = async (updatedAllocation: Allocation) => {
        const updated = await allocationService.updateAllocationService(updatedAllocation);
        setAllocations(prev =>
            prev.map(a => a.allocation_id === updated.allocation_id ? updated : a)
        );
    };


    const deleteAllocation = async (index: number) => {
        setAllocations(prev => prev.filter((_, i) => i !== index));

        const allocationID = allocations[index]?.allocation_id;
        await allocationService.deleteAllocationService(/*userID,*/ allocationID);
    };

    return { allocations, addAllocation, deleteAllocation, updateAllocation };
}