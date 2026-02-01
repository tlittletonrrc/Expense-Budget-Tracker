import { useState } from "react";
import AddAccountForm from "../Components/AccountsOverviewForm/AddAccountForm";
import AccountsTable from "../Components/AccountsTable/AccountsTable";
import type { BankAccount } from "../Components/AccountsOverviewData/AccountsData";

const initialAccounts: BankAccount[] = [
    {
        role: "Default asset",
        name: "Main Checking",
        accountNumber: "123456789",
        balance: 1250.75
    }
];

function AccountsOverviewPage({
    setRoute
}: {
    setRoute: React.Dispatch<React.SetStateAction<string>>;
}) {
    const [accounts, setAccounts] = useState<BankAccount[]>(initialAccounts);

    function setPage() {
        setRoute("/Accounts");
    }

    setPage();

    return (
        <>
            <AddAccountForm accounts={accounts} setAccounts={setAccounts} />
            <AccountsTable accounts={accounts} setAccounts={setAccounts} />
        </>
    );
}

export default AccountsOverviewPage;