import type {Allocation} from "./Allocation"

export type UserType = {
    userID: string,
    name: string,
    email: string,
    balance: number,
    savingsGoal: number,
    paymentsDue: string
    allocations: Allocation[]
}