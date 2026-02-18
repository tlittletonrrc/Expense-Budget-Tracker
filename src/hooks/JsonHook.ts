import { useState } from "react";
import * as allocationService from "../Services/AllocationService"


/**
 * @param user: User object loaded from JSON
 * 
 * @returns {
 *  name: string - User name (static display)
 *  email: string - User email (static display)
 *  balance: number - Displayed overall balance (UI state)
 *  savingsGoal: number - Displayed savings goal (UI state)
 *  paymentsDue: string[] - List of payment due dates (UI state)
 *  allocations: {category: string, amount: number, date: string}[] - List of allocations (UI state)
 *  accounts: {role: string, name: string, accountNumber: string, balance: number}[] - List of user accounts (UI state)
 *  
 *  setBalance: (newBalance: number) => void - Updates the displayed balance (UI only)
 *  updateSavingsGoal: (newGoal: number) => void - Updates the savings goal (UI only)
 *  addAllocation: (allocation) => void - Adds a new allocation (UI only)
 *  deleteAllocation: (allocation) => void - deletes an allocation (UI only)
 *  addPaymentDue: (paymentDate: string) => void - Adds a new payment due (UI only)
 *  updateAccountBalance: (accountNumber: string, newBalance: number) => void - Updates the balance of a specific account (UI only)
 *  addAccount: (account) => void - Adds a new account (UI only)
 * }
 */
export function useUserProfileDisplay(user: {
    userID: string;
    name: string;
    email: string;
    balance: number;
    savingsGoal: number;
    paymentsDue: string;
    allocations: {
        category: string;
        amount: number;
        date: string;
    }[];
    accounts: {
        role: string;
        name: string;
        accountNumber: string;
        balance: number;
    }[];
}) {
    const [balance, setBalance] = useState(user.balance);
    const [savingsGoal, setSavingsGoal] = useState(user.savingsGoal);
    const [paymentsDue, setPaymentsDue] = useState(user.paymentsDue);
    const [allocations, setAllocations] = useState(user.allocations);
    const [accounts, setAccounts] = useState(user.accounts);

    const updateSavingsGoal = (newGoal: number) => {
        setSavingsGoal(newGoal);
    };

    const addPaymentDue = (paymentDate: string) => {
        setPaymentsDue(paymentDate); 
    };

    const updateAccountBalance = (accountNumber: string, newBalance: number) => {
        setAccounts((prev) =>
            prev.map((account) =>
                account.accountNumber === accountNumber
                    ? { ...account, balance: newBalance }
                    : account
            )
        );
    };

    const addAccount = (account: {
        role: string;
        name: string;
        accountNumber: string;
        balance: number;
    }) => {
        setAccounts((prev) => [...prev, account]);
    };


    const addAllocation = (UserID: string, newAllocation: {
        category: string;
        amount: number;
        date: string;
    }) => {
        setAllocations(prev => {
            const exists = prev.some(a => a.category === newAllocation.category);

            if (exists) {
                return prev.map(a =>
                    a.category === newAllocation.category
                        ? { ...a, amount: newAllocation.amount, date: newAllocation.date }
                        : a
                );
            }

            return [...prev, newAllocation];
        });
        allocationService.createAllocationService(UserID, newAllocation)
    };

    const deleteAllocation = (UserID: string, index: number) => {
        setAllocations(prev => prev.filter((_, i) => i !== index));

        allocationService.deleteAllocationService(UserID, index)
    };



    return {
        name: user.name,
        email: user.email,
        balance,
        savingsGoal,
        paymentsDue,
        allocations,
        accounts,

        setBalance,
        updateSavingsGoal,
        addAllocation,
        deleteAllocation,
        addPaymentDue,
        updateAccountBalance,
        addAccount,
    };
}