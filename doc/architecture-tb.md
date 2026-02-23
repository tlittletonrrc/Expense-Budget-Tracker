# Tarryn Bereznycky Architecture Document
---

## Json Hook
The JSON hook updates the use state of user and accounts.

**Add Allocation:** I edited the add allocation to update the value if an allocation already exists in the list. Otherwise it would add a new allocation even if it already exists. This separates concerns by only updating the state, the actual addition of data is done in the service layer. This implementation is used in the budget allocation page, specifically in the budget allocation table, and is used to add/update allocations being added.

**Delete Allocation:** I added delete allocation in the hook so the use state updates when an allocation is deleted. The logic goes through the list and deletes the specified item from the table. This separates concerns because it only updates the state and the actual deletion of data is done in the service layer. This hook is used in the budget allocation table to delete an allocation from state.


## Allocation Repository
---
The allocation repository is used to fetch, add, update, and delete any data related to allocations. The use of this repository separates concerns by separating the validation and retrieval functions for allocation into their own layers.

**GetAllocationByUser:** The GetAllocationByUser takes the user id and calls the GetUserByID service to retrieve data on the user. It then returns all the allocations made by that user. This separates concerns by ony having calls to the data in the repo, The verification happens in the service layer. This function is called in the AllocationService to verify the data retrieved.

**UpdateAllocation:** UpdateAllocation takes the UserID and updated allocation data to update an existing allocation. This function is called in the service layer after the data is properly validated. 

**CreateAllocation:** The create allocation function is used to create a new allocation for a user. This is called in the allocationService after the given data is validated and ensured no missing values exist. The service verifies the allocation doesn't already exist. If it does, it is then updated instead using updateAllocation.

**DeleteAllocation:** Delete allocation deletes the users specified allocation. It is called in the AllocationService after being verified there is no missing or invalid value.


## Allocation Service
---
The allocationService is used for the allocationRepository to verify and validate inputs before being sent to the repository. This separates concerns by having all validation logic for allocations in the service layer.

**GetAllocationByUserIDService:** The get allocation by user id service is used to verify that the user who's info your trying to retrieve exists. It does so by calling the getUserByID Service in the userService file. It then returns the users allocations once verified. 

**createAllocationService:** The createAllocationService verifies that the user and all required inputs exist before being sent to the repository. It also checks if the allocation already exists. If it does it then calls the updateAllocation instead to update the current allocation.

**deleteAllocationService:** The deleteAllocationService verifies that the User and Allocation exists before calling the deleteAllocation repository function.


## User Repository
---
The user repository is used to retrieve any user data from the users.json. This is separated from the AllocationRepo for organization and to avoid confusion. This repository layer separates concerns by being the only file to retrieve all data related to users in user.json. Its also separated from the validation logic.

**getAllUsers:** This returns a list of all users. It is used in the getAllUsersService where the data is validated to ensure users exist.

**getUserByID:** Get user by id finds a specific user by their UserID. this is used in the getUserByID service where it is verified that the user exists.


## User Service
---
The user service is used to validate data given by the UserRepo before being used. It is used in the allocationService and allocationRepository to retrieve specific user data and verify userID's exist. This separates concerns because this repository specifically grabs user data, compared the the allocationRepository which grabs allocations.

**getAllUserService:** This service grabs all users using the repo and verifies they exist. If the checks pass it returns a list of all users.

**getUserByIDService:** This service grabs a specific user using their ID from the repo. The service validates the data and if the checks pass it returns the specific user. This is used in the AllocationRepository to grab allocation data on specific users.