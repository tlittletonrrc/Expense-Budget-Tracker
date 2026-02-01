import { useState } from "react";
import type { BankAccount } from "../AccountsOverviewData/AccountsData";
// import './AddAccountForm.css'

function AddAccountForm({
    accounts,
    setAccounts
}: {
    accounts: BankAccount[];
    setAccounts: React.Dispatch<React.SetStateAction<BankAccount[]>>;
}) {
    const [role, setRole] = useState("");
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [balance, setBalance] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (role.trim().length < 3) {
            setError("Role must be at least 3 characters.");
            return;
        }

        if (accountName.trim().length < 3) {
            setError("Account name must be at least 3 characters.");
            return;
        }

        if (!accountNumber.trim()) {
            setError("Account number is required.");
            return;
        }

        const parsedBalance = parseFloat(balance);
        if (isNaN(parsedBalance)) {
            setError("Balance must be a number.");
            return;
        }

        setAccounts([
            ...accounts,
            {
                role: role.trim(),
                name: accountName.trim(),
                accountNumber: accountNumber.trim(),
                balance: parsedBalance
            }
        ]);

        setRole("");
        setAccountName("");
        setAccountNumber("");
        setBalance("");
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
                placeholder="Role"
                value={role}
                onChange={e => setRole(e.target.value)}
            />

            <input
                placeholder="Account Name"
                value={accountName}
                onChange={e => setAccountName(e.target.value)}
            />

            <input
                placeholder="Account Number"
                value={accountNumber}
                onChange={e => setAccountNumber(e.target.value)}
            />

            <input
                type="number"
                placeholder="Balance"
                value={balance}
                onChange={e => setBalance(e.target.value)}
            />

            <button type="submit">Add Account</button>
        </form>
    );
}

export default AddAccountForm;