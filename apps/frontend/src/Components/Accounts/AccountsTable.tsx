import { useAuth } from "@clerk/clerk-react";
import type { BankAccount } from "@shared/types/BankAccounts";
import * as accountService from "../../Services/AccountsService";
import "../../css/table.css";

function AccountsTable({
    accounts,
    setAccounts,
    userID
}: {
    accounts: BankAccount[];
    setAccounts: React.Dispatch<React.SetStateAction<BankAccount[]>>;
    userID: string;
}) {

    const { getToken, isLoaded, isSignedIn } = useAuth();

    async function deleteAccount(id: number) {

        if (!isLoaded || !isSignedIn) return;
        const token = await getToken();

        await accountService.deleteAccount(id, token);
        const updated = await accountService.getAllAccounts(userID, token);
        setAccounts(updated);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Role</th>
                    <th>Account Name</th>
                    <th>Account Number</th>
                    <th>Balance</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {accounts.map((acc) => (
                    <tr key={acc.id}>
                        <td>{acc.role}</td>
                        <td>{acc.name}</td>
                        <td>{acc.accountNumber}</td>
                        <td>${acc.balance.toFixed(2)}</td>
                        <td>
                            <button onClick={() => deleteAccount(acc.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default AccountsTable;