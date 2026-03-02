import type {Allocation, BankAccount} from "./Allocation"

export type UserType = {
    userID: string,
    name: string,
    email: string,
    balance: number,
    savingsGoal: number,
    paymentsDue: string,
    allocations: Allocation[],
    accounts: BankAccount[];
}