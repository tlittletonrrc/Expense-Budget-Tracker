const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const TERM_ENDPOINT = "/user"


export async function getUserByIDService(UserID: string, sessionToken: string) {
    if (!UserID) {
        throw new Error("Must provide user id.")
    }
    if (!sessionToken) {
        throw new Error("Unauthorized")
    }
    try{
        const userResponse: Response = await fetch(
            `${BASE_URL}${TERM_ENDPOINT}/${UserID}`, {
                headers: {
                    Authorization: `Bearer ${sessionToken}`
                }
            }
        );
    
        if(!userResponse.ok) {
            throw new Error(`Failed to fetch user with id ${UserID}`);
        }
    
        const json= await userResponse.json();
        return json.user;
    } catch {
        throw new Error("Error fetching user.")
    }
}