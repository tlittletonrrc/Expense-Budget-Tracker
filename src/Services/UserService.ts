import * as repo from "../Repositories/UserRepository"
import type { UserType } from "../Types/UserType"

/**
 * Service Layer: UserService
 * 
 * This service handles all business logic related to users.
 * It acts as an intermediary between components/hooks and the repository,
 * ensuring data validation and business rules are applied consistently.
 */


export function getAllUserService() {
    const users = repo.getAllUsers()
    if (!users) {
        throw new Error("No Users Found")
    }
    return users
}

export function getUserByIDService(UserID: string) {
    const user = repo.GetUserByID(UserID)
    if (!user) {
        throw new Error("No user exists by that id")
    }
    return user
}


/**
 * Validates if a user exists by their ID
 * @param userID - The unique identifier for the user
 * @returns boolean - true if user exists, false otherwise
 * 
 * Business Logic: Simple existence check without throwing errors
 */
export function userExistsService(userID: string): boolean {
    try {
        const user = repo.GetUserByID(userID)
        return user !== undefined
    } catch {
        return false
    }
}

/**
 * Validates if an email is already registered in the system
 * @param email - Email address to check
 * @returns boolean - true if email exists, false otherwise
 * 
 * Business Logic: Prevents duplicate email registrations
 */
export function isEmailRegisteredService(email: string): boolean {
    const allUsers = repo.getAllUsers()
    return allUsers.users.some(user => user.email.toLowerCase() === email.toLowerCase())
}

/**
 * Get a user by their email address
 * @param email - Email address to search for
 * @returns UserType | undefined - User object or undefined if not found
 * 
 * Business Logic: Alternative lookup method for login scenarios
 */
export function getUserByEmailService(email: string): UserType | undefined {
    const allUsers = repo.getAllUsers()
    return allUsers.users.find(user => user.email.toLowerCase() === email.toLowerCase())
}