// ===========================================================
// Repository in front end due to confusion from course notes.
// ===========================================================

import type { Allocation } from "@shared/types/Allocation"
import type { NewAllocation } from "@shared/types/NewAllocation"

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const ALLOCATION_ENDPOINT = "/allocations"


export async function getAllocationByUser(UserID: string): Promise<Allocation[]> {
    const termResponse: Response = await fetch(
        `${BASE_URL}${ALLOCATION_ENDPOINT}/${UserID}`
    );

    if(!termResponse.ok) {
        throw new Error(`Failed to fetch term with id ${UserID}`);
    }

    const json = await termResponse.json();
    return json.Allocations;
}


export async function updateAllocation(newAllocation: NewAllocation) {  
    const updateResponse: Response = await fetch(
        `${BASE_URL}${ALLOCATION_ENDPOINT}`,
        {
            method: "PUT",
            body: JSON.stringify({...newAllocation}),
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
        
    if(!updateResponse.ok) {
        throw new Error(`Failed to update ${newAllocation.category} category.`);
    }

    const json = await updateResponse.json();
    return json.updatedAllocation;
}


export async function createAllocation(newAllocation: NewAllocation) {
    const response: Response = await fetch(`${BASE_URL}${ALLOCATION_ENDPOINT}/new`, {
        method: "POST",
        body: JSON.stringify(newAllocation),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response) {
        throw new Error("Error creating allocation.")
    }

    const json = await response.json();
    return json.newAllocation;
}


export async function deleteAllocation(allocation_id: number) {
    const deleteResponse: Response = await fetch(
        `${BASE_URL}${ALLOCATION_ENDPOINT}/${allocation_id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }
    );

    if(!deleteResponse.ok) {
        throw new Error(`Failed to delete allocation with id ${allocation_id}`);
    }

    const json = await deleteResponse.json();
    return json;
}
