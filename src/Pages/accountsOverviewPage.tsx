import { useEffect, useState } from "react";
import AddAccountForm from "../Components/AccountsOverviewForm/AddAccountForm";
import AccountsTable from "../Components/AccountsTable/AccountsTable";
import { Accounts as initialAccounts } from "../Data/AccountsData";
import type { BankAccount } from "../Types/BankAccount";

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
    const [accounts, setAccounts] = useState<BankAccount[]>(initialAccounts);

    useEffect(() => {
        setRoute("/Accounts");
    }, [setRoute]);

    return (
        <div className="accounts-page">
            <h2>Accounts Overview</h2>
            <AddAccountForm accounts={accounts} setAccounts={setAccounts} />
            <AccountsTable accounts={accounts} setAccounts={setAccounts} />
        </div>
    );
}

export default AccountsOverviewPage;