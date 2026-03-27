const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const TERM_ENDPOINT = "/user"


export async function getUserByIDService(UserID: string) {
    if (!UserID) {
        throw new Error("Must provide user id.")
    }
    try{
        const userResponse: Response = await fetch(
            `${BASE_URL}${TERM_ENDPOINT}/${UserID}`
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