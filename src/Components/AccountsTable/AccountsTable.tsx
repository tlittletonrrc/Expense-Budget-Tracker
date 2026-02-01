import type { BankAccount } from "../AccountsOverviewData/AccountsData";
// import './AccountsTable.css'

function AccountsTable({
    accounts,
    setAccounts
}: {
    accounts: BankAccount[];
    setAccounts: React.Dispatch<React.SetStateAction<BankAccount[]>>;
}) {

    function deleteAccount(index: number) {
        setAccounts(
            accounts.filter((_, i) => i !== index)
        );
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

            {accounts.map((acc, index) => (
                <tbody key={index}>
                    <tr>
                        <td>{acc.role}</td>
                        <td>{acc.name}</td>
                        <td>{acc.accountNumber}</td>
                        <td>${acc.balance.toFixed(2)}</td>
                        <td>
                            <button onClick={() => deleteAccount(index)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            ))}
        </table>
    );
}

export default AccountsTable;