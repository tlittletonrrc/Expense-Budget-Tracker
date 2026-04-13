import { useState, useEffect } from "react";
import * as allocationService from "../Services/AllocationService";
import type { Allocation } from "@shared/types/Allocation";
import type { NewAllocation } from "@shared/types/NewAllocation";
import { useAuth } from "@clerk/clerk-react";


export function useAllocations(userID: string) {
    const [allocations, setAllocations] = useState<Allocation[]>([]);
    const { getToken, isSignedIn } = useAuth();
  
    useEffect(() => {
        if (!isSignedIn) return;
        async function loadAllocations() {
            let sessionToken = isSignedIn? await getToken() : null;
            if (!sessionToken) {
                throw new Error("Unauthorized to get allocation")
            }
            const data = await allocationService.getAllocationByUserIDService(userID, sessionToken);
            setAllocations(data || []);
        }
        loadAllocations();
    }, [userID]);


    const addAllocation = async (newAllocation: NewAllocation) => {
        let sessionToken = isSignedIn? await getToken() : null;
       
        if (!sessionToken) {
            throw new Error("Unauthorized to create allocation")
        } 

        const createdAllocation = await allocationService.createAllocationService(newAllocation, sessionToken);
        setAllocations(prev => [...prev, createdAllocation]);
    };


    const updateAllocation = async (updatedAllocation: Allocation) => {
        let sessionToken = isSignedIn? await getToken() : null;
        if (!sessionToken) {
            throw new Error("Unauthorized to update allocation")
        } 
        
        const updated = await allocationService.updateAllocationService(updatedAllocation, sessionToken);
        setAllocations(prev =>
            prev.map(a => a.allocation_id === updated.allocation_id ? updated : a)
        );
    };


    const deleteAllocation = async (index: number) => {
        let sessionToken = isSignedIn? await getToken() : null;
        if (!sessionToken) {
            throw new Error("Unauthorized to delete allocation")
        } 

        setAllocations(prev => prev.filter((_, i) => i !== index));

        const allocationID = allocations[index]?.allocation_id;
        await allocationService.deleteAllocationService(allocationID, sessionToken);
    };

    return { allocations, addAllocation, deleteAllocation, updateAllocation };
}