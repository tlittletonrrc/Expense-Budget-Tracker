import { useEffect, useState } from "react";
import AddAccountForm from "../Components/Accounts/AddAccountForm";
import AccountsTable from "../Components/Accounts/AccountsTable";
import * as accountService from "../Services/AccountsService"
import type { BankAccount } from "@shared/types/BankAccounts";
import '../css/page.css'

function AccountsOverviewPage({ setRoute }: { setRoute: React.Dispatch<React.SetStateAction<string>> }) {
    /*
        AccountsRepository : The accounts page uses the accounts repository to get, update, create, and delete items 
                            out of the accounts table. It does this by calling the functions in the service layer 
                            to fetch the data from the JSON.

        AccountService     : The account service is used to validate data after retrieving it from the repository. 
                            If it passes all validations, the data is sent to the state to update the UI.

        JSONHook           : The JSON hook manages the allocations state and updates the ui when changes are made.

        Why this way       : Separates concerns: the repository handles data, the service validates, 
                            and the component maintains state for the UI.
    */
    const [accounts, setAccounts] = useState<BankAccount[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setRoute("/Accounts");

        const loadAccounts = async () => {
            try {
                const data = await accountService.getAllAccounts();
                setAccounts(data);
            } catch (err) {
                console.error("Failed to load accounts", err);
            } finally {
                setLoading(false);
            }
        };

        loadAccounts();
    }, [setRoute]);

    if (loading) {
        return <div className="page">Loading accounts...</div>;
    }

    return (
        <div className="page">
            <h2>Accounts Overview</h2>
            <AccountsTable accounts={accounts} setAccounts={setAccounts} />
            <AddAccountForm setAccounts={setAccounts} />
        </div>
    );
}


export default AccountsOverviewPage;