import { useState } from "react";
import type { BankAccount } from "../../Types/BankAccount";
import '../../css/form.css'

function AddAccountForm({
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

        if (role.length < 3) {
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

        setAccounts(prevAccounts => {
            const existingIndex = prevAccounts.findIndex(
                account =>
                    account.role === role &&
                    account.name === accountName &&
                    account.accountNumber === accountNumber
            );

            if (existingIndex !== -1) {
                const updatedAccounts = [...prevAccounts];
                updatedAccounts[existingIndex] = {
                    ...updatedAccounts[existingIndex],
                    balance: parsedBalance
                };
                return updatedAccounts;
            }

            return [
                ...prevAccounts,
                {
                    role: role,
                    name: accountName,
                    accountNumber: accountNumber,
                    balance: parsedBalance
                }
            ];
        });

        setRole("");
        setAccountName("");
        setAccountNumber("");
        setBalance("");
    };

    return (
        <form className="allocation-form" onSubmit={handleSubmit}>
            <h4 className="allocation-form-title">Add Bank Account</h4>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="inputs">
                <input
                    className="input-bar"
                    placeholder="Role"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    minLength={3}
                    required
                />

                <input
                    className="input-bar"
                    placeholder="Account Name"
                    value={accountName}
                    onChange={e => setAccountName(e.target.value)}
                    minLength={3}
                    required
                />

                <input
                    className="input-bar"
                    placeholder="Account Number"
                    value={accountNumber}
                    onChange={e => setAccountNumber(e.target.value)}
                    required
                />

                <input
                    className="input-bar"
                    type="number"
                    placeholder="Balance"
                    value={balance}
                    onChange={e => setBalance(e.target.value)}
                    required
                />
            </div>

            <button type="submit">
                Add Account
            </button>
        </form>
    );
}

export default AddAccountForm;