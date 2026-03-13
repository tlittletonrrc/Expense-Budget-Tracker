import { useState, useEffect } from "react";
import * as allocationService from "../Services/AllocationService";
import type { Allocation } from "@shared/types/Allocation";

export function useAllocations(userID: string) {
    const [allocations, setAllocations] = useState<Allocation[]>([]);
  
    useEffect(() => {
        async function loadAllocations() {
            const data = await allocationService.getAllocationByUserIDService(userID);
            setAllocations(data || []);
        }
        loadAllocations();
    }, [userID]);


    const addAllocation = async (newAllocation: Allocation) => {
        setAllocations(prev => {
            const exists = prev.some(a => a.category === newAllocation.category);
            if (exists) {
                return prev.map(a =>
                    a.category === newAllocation.category
                        ? { ...a, amount: newAllocation.amount, date: newAllocation.date }
                        : a
                );
            }
            return [...prev, newAllocation];
        });

        await allocationService.createAllocationService(newAllocation);
    };


    const deleteAllocation = async (index: number) => {
        setAllocations(prev => prev.filter((_, i) => i !== index));

        const allocationID = allocations[index]?.allocation_id;
        await allocationService.deleteAllocationService(/*userID,*/ allocationID);
    };

    return { allocations, addAllocation, deleteAllocation };
}