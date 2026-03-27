import { useEffect, useState } from "react";
import * as userService from "../Services/UserService";
import type { UserType } from "@shared/types/UserType";

function useUser(userId: string) {
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        const getUser = async () => {
            const data = await userService.getUserByIDService(userId);
            setUser(data);
        };

        getUser();
            }, [userId]);

            return user;
        }

export default useUser;