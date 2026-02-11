# Tarryn Bereznycky Architecture Document
---

## Hook
---

### Json Hook
The JSON hook updates the use state of user and accounts.

**Add Allocation:** I edited the add allocation to update the value if an allocation already exists in the list. Otherwise it would add a new allocation even if it already exists. This separates concerns by only updating the state, the actual addition of data is done in the service layer. This implementation is used in the budget allocation page, specifically in the budget allocation table, and is used to add/update allocations being added.

**Delete Allocation:** I added delete allocation in the hook so the use state updates when an allocation is deleted. The logic goes through the list and deletes the specified item from the table. This separates concerns because it only updates the state and the actual deletion of data is done in the service layer. This hook is used in the budget allocation table to delete an allocation from state.

## Repository
---
The allocation repository is used to fetch, add, update, and delete any data related to allocations.

## Services
---