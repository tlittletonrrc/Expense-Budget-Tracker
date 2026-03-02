import users from "../Data/user.json";
import type { userData } from "../Types/userData";
import type { UserType } from "../Types/UserType";

function transformUser(rawUser: any): UserType {
    return {
        ...rawUser,
        accounts: []
    };
}

export function getAllUsers(): userData {
    return {
        users: users.users.map(transformUser)
    };
}

export const GetUserByID = (UserID: string): UserType | undefined => {
    const rawUser = users.users.find(u => u.userID === UserID);
    if (!rawUser) return undefined;

    return transformUser(rawUser);
};