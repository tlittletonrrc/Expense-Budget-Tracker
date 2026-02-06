import type { UserType } from "../Types/UserType"
import users from "../Data/user.json"

export function getAllAllocations(): UserType {
    return users
}

export function createAllocation(newAllocation: { category: string; amount: number; date: string }): UserType {
    const exists = users.allocations.some(a => a.category === newAllocation.category);

    if (exists) {
        users.allocations = users.allocations.map(a =>
            a.category === newAllocation.category
                ? { ...a, amount: newAllocation.amount, date: newAllocation.date }
                : a
        );
    } else {
        users.allocations.push(newAllocation);
    }

    return users; 
}

export function deleteAllocationService(index: number): UserType {
    users.allocations = users.allocations.filter((_, i) => i !== index);
    return users;
}