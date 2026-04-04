import { useEffect, useState } from "react";
import * as userService from "../Services/UserService";
import type { UserType } from "@shared/types/UserType";
import { useAuth } from "@clerk/clerk-react";

function useUser(userId: string) {
    const [user, setUser] = useState<UserType | null>(null);
    const { getToken, isSignedIn } = useAuth();

    useEffect(() => {
        if (!isSignedIn) return;
        const getUser = async () => {
            let sessionToken = isSignedIn? await getToken() : null;
            if (!sessionToken) {
                throw new Error("Unauthorized to get allocation")
            }
            const data = await userService.getUserByIDService(userId, sessionToken);
            setUser(data);
        };

        getUser();
    }, [userId]);

    return user;
}

export default useUser;