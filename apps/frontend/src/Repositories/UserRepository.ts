import type { UserType } from "@shared/types/UserType"

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const TERM_ENDPOINT = "/user"

export async function getUserByID(userID: string): Promise<UserType> {
    const userResponse: Response = await fetch(
        `${BASE_URL}${TERM_ENDPOINT}/${userID}`
    );

    if(!userResponse.ok) {
        throw new Error(`Failed to fetch user with id ${userID}`);
    }

    const json= await userResponse.json();
    return json.user;
}