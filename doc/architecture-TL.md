# Thomas Littleton Architecture Document
---

## Json Hook
The JSON hook updates the use state of user and accounts.

**Add Accounts:** I add addAccount to update the state if an account with the same account number already exists; otherwise, it adds a new account. This separates concerns by only updating the state — the actual creation or updating of data is handled in the service layer. This hook is used in the Accounts Overview Page, specifically in the AddAccountForm component, to update the UI when a new account is added.

**Delete Account:**I add deleteAccount to remove an account from the state when deleted. The logic filters the accounts array and updates state accordingly. This separates concerns because it only manages UI state; the service layer handles actual data deletion. This hook is used in the AccountsTable component to delete accounts from the UI.

## Accounts Repository

The repository is responsible for fetching, creating, updating, and deleting account data. Separating this logic allows the service layer to focus on validation, while the repository handles raw data manipulation.

**getAllAccounts:** Returns the full list of accounts. This is called in the AccountsService to check for existing accounts before creating or updating.

**createAccount:** Adds a new account to the global in-memory accounts list. Called by the service after validation ensures the data is complete.

**updateAccount:** Updates an existing account by matching accountNumber. The service calls this after validating that the account exists and input data is correct.

**deleteAccount:** Removes an account by its index. The service calls this after verifying the deletion request is valid.

## Accounts Service

The service layer validates and manages logic before data is sent to the repository. This ensures only correct and complete data reaches the repository and separates business rules from raw data operations.

**createAccountService:** Validates that all required fields (name and accountNumber) are provided. Checks if the account already exists using getAllAccounts. If it exists, it calls updateAccount; otherwise, it calls createAccount. This keeps validation logic separate from the repository.

**deleteAccountService:** Simply calls deleteAccount from the repository, assuming that any index passed in is valid. This ensures that deletion requests are centralized in the service layer.

## Accounts Data

AccountsData provides a pre-populated set of accounts for testing and UI initialization. This separates static sample data from the repository and service logic.

**Accounts Array:** Contains sample accounts with roles (Checking or Savings), names, account numbers, and balances. This is used in the Accounts Overview Page to initialize state and display a pre-existing dataset.