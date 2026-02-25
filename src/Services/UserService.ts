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


/**
 * Calculate the total amount allocated across all categories for a user
 * @param userID - The unique identifier for the user
 * @returns number - Total amount allocated
 * 
 * Business Logic: Sums all allocation amounts to show total budget commitments
 */
export function getTotalAllocationsService(userID: string): number {
    const user = getUserByIDService(userID)
    return user.allocations.reduce((total, allocation) => total + allocation.amount, 0)
}

/**
 * Calculate remaining balance after all allocations
 * @param userID - The unique identifier for the user
 * @returns number - Balance remaining after allocations
 * 
 * Business Logic: Shows how much money is left after all budget allocations
 * Can be negative if user is over-allocated
 */
export function getRemainingBalanceService(userID: string): number {
    const user = getUserByIDService(userID)
    const totalAllocated = getTotalAllocationsService(userID)
    return user.balance - totalAllocated
}

/**
 * Calculate savings progress as a percentage
 * @param userID - The unique identifier for the user
 * @returns number - Percentage of savings goal reached (0-100+)
 * 
 * Business Logic: Shows progress toward savings goal
 * Can exceed 100% if user has saved more than their goal
 */
export function getSavingsProgressService(userID: string): number {
    const user = getUserByIDService(userID)
    if (user.savingsGoal === 0) return 0
    
    const remainingBalance = getRemainingBalanceService(userID)
    return (remainingBalance / user.savingsGoal) * 100
}

/**
 * Check if user is over-budget (allocations exceed balance)
 * @param userID - The unique identifier for the user
 * @returns boolean - true if over-budget, false otherwise
 * 
 * Business Logic: Determines if user needs to adjust their allocations
 */
export function isOverBudgetService(userID: string): boolean {
    return getRemainingBalanceService(userID) < 0
}

/**
 * Get financial summary for a user
 * @param userID - The unique identifier for the user
 * @returns Object containing all financial metrics
 * 
 * Business Logic: Aggregates multiple calculations for dashboard displays
 */
export function getUserFinancialSummaryService(userID: string) {
    const user = getUserByIDService(userID)
    const totalAllocations = getTotalAllocationsService(userID)
    const remainingBalance = getRemainingBalanceService(userID)
    const savingsProgress = getSavingsProgressService(userID)
    const isOverBudget = isOverBudgetService(userID)

    return {
        userID: user.userID,
        name: user.name,
        balance: user.balance,
        totalAllocations,
        remainingBalance,
        savingsGoal: user.savingsGoal,
        savingsProgress,
        isOverBudget,
        allocationCount: user.allocations.length
    }
}