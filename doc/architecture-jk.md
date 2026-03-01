# Jashandeep Kaur Architecture Document
---

## User Service
The User Service handles all business logic related to users including validation, financial calculations, and data retrieval.

**userExistsService:** I created userExistsService to check if a user exists without throwing an error. This separates concerns by providing a safe validation method that returns true/false instead of crashing. This is used in form validation and user lookups before attempting operations.

**isEmailRegisteredService:** I added isEmailRegisteredService to check if an email is already registered in the system. The logic does a case-insensitive search through all users. This separates concerns by handling email validation in the service layer rather than in components. This is used in user registration forms to prevent duplicate accounts.

**getUserByEmailService:** The getUserByEmailService finds a user by their email address instead of ID. This provides an alternative lookup method useful for login scenarios. This separates concerns by keeping lookup logic in the service layer. This is called when users log in with email.

**getTotalAllocationsService:** I created getTotalAllocationsService to calculate the sum of all allocations for a user. This separates concerns by centralizing the calculation logic so components don't have to loop through allocations themselves. This is used in UserDashboard and financial summaries.

**getRemainingBalanceService:** The getRemainingBalanceService calculates how much money a user has left after all allocations. The logic subtracts total allocations from the user's balance. This separates concerns by keeping financial calculations in the service layer. This is used in UserDashboard and UserInfo components to display available funds.

**getSavingsProgressService:** I added getSavingsProgressService to calculate what percentage of their savings goal the user has reached. The logic divides remaining balance by savings goal and multiplies by 100. This separates concerns by centralizing percentage calculations. This is used in UserDashboard to show progress bars.

**isOverBudgetService:** The isOverBudgetService checks if a user has allocated more money than they have available. This returns true if remaining balance is negative. This separates concerns by handling budget validation in the service. This is used to show warning badges in UserInfo and UserDashboard.

**getUserFinancialSummaryService:** I created getUserFinancialSummaryService to aggregate all financial calculations into one object. This calls multiple service methods and combines the results. This separates concerns by providing a single method that components can use instead of calling many methods. This is used in UserDashboard to get all data in one call.

## User Repository
---
The User Repository handles all data access for user information from user.json. This is separated from the service layer to keep data fetching separate from business logic.

**getAllUsers:** This returns a list of all users from user.json. It is used in getAllUserService where the data is validated to ensure users exist. This is also used when populating user selection dropdowns.

**GetUserByID:** GetUserByID finds a specific user by their UserID. This is used in getUserByIDService where it is verified that the user exists. This function is called throughout the service layer when user data is needed.

## UserDashboard Component
---
The UserDashboard component displays a comprehensive financial overview for users. It uses the service layer to get all calculated data.

**getUserFinancialSummaryService usage:** The component calls getUserFinancialSummaryService to retrieve all financial metrics in one call. This separates concerns by keeping calculations out of the component - it only displays pre-calculated data. This demonstrates the hook-service-repository architecture pattern.

**Display Logic:** The component renders financial data in cards showing balance, allocations, remaining balance, and savings progress. All calculations are done by the service, the component just handles presentation.

## UserInfo Component
---
The UserInfo component displays quick user status information in a compact format suitable for headers.

**Multiple Service Calls:** The component calls getUserByIDService, getRemainingBalanceService, and isOverBudgetService. This separates concerns by using service methods for all business logic while the component handles presentation. This demonstrates reusing service methods in different components.

**Display Logic:** The component shows user name, email, available balance, and an over-budget warning badge if needed. All validation and calculations happen in the service layer.