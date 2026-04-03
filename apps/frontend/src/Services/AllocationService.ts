import type { Allocation } from "@shared/types/Allocation";
import type { NewAllocation } from "@shared/types/NewAllocation";


const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const ALLOCATION_ENDPOINT = "/allocations"


export async function getAllocationByUserIDService(UserID: string, sessionToken: string):Promise<Allocation[]> {
    if (!UserID) {
        throw new Error("Must Provide UserID for get allocation service.")
    }
    if (!sessionToken) {
        throw new Error("Unauthorized")
    }

    try{
        const termResponse: Response = await fetch(
            `${BASE_URL}${ALLOCATION_ENDPOINT}/${UserID}`, {
                headers: {
                    Authorization: `Bearer ${sessionToken}`
                }
            }
        );

        if(!termResponse.ok) {
            throw new Error(`Failed to fetch term with id ${UserID}`);
        }
        const json = await termResponse.json();
        return json.Allocations;

    } catch {
        throw new Error("Error fetching users allocations.")
    }
}


export async function createAllocationService(NewAllocation: NewAllocation, sessionToken: string) {
    if (!NewAllocation.userID || !NewAllocation.amount || !NewAllocation.category || !NewAllocation.date) {
        throw new Error("Missing allocation fields")
    }
    if (!sessionToken) {
        throw new Error("Unauthorized")
    }

    try {
        const response: Response = await fetch(`${BASE_URL}${ALLOCATION_ENDPOINT}/new`, {
            method: "POST",
            body: JSON.stringify(NewAllocation),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionToken}`
            },
        });

        if (!response.ok) {
            throw new Error("Error creating allocation.")
        }

        const json = await response.json();
        return json.newAllocation;
    } catch {
        throw new Error("Error creating new service.")
    }
}


export async function updateAllocationService(NewAllocation: Allocation, sessionToken: string) {
    if (!NewAllocation.userID || !NewAllocation.allocation_id || !NewAllocation.amount || !NewAllocation.category || !NewAllocation.date) {
        throw new Error("Missing UserID, Allocation id, amount, category, or date.")
    }
    if (!sessionToken) {
        throw new Error("Unauthorized")
    }

    try {
        const updateResponse: Response = await fetch(
        `${BASE_URL}${ALLOCATION_ENDPOINT}`,
        {
            method: "PUT",
            body: JSON.stringify({...NewAllocation}),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionToken}`
                }
            }
        );

        if(!updateResponse.ok) {
            throw new Error(`Failed to update ${NewAllocation.category} category.`);
        }
        const json = await updateResponse.json();
        return json.updatedAllocation;

    } catch{
        throw new Error("Error updating allocation.")
    }
}


export async function deleteAllocationService(allocation_id: number, sessionToken: string) {
    if (!allocation_id) {
        throw new Error("Missing allocation id")
    }
    if (!sessionToken) {
        throw new Error("Unauthorized")
    }
    try{
        const deleteResponse: Response = await fetch(
            `${BASE_URL}${ALLOCATION_ENDPOINT}/${allocation_id}`,
                {
                    method: "DELETE",
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${sessionToken}`
                }
            }
        );

        if(!deleteResponse.ok) {
            throw new Error(`Failed to delete allocation with id ${allocation_id}`);
        }

        const json = await deleteResponse.json();
        return json;
    } catch {
        throw new Error("Unable to delete allocation")
    }
}