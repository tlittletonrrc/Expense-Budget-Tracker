// Components
import BudgetAllocationForm from "../Components/BudgetAllocationForm/BudgetAllocationForm";
import BudgetAllocationTable from "../Components/BudgetAllocationTable/BudgetAllocationTable";

// Hooks
import { useUserProfileDisplay } from "../hooks/JsonHook";

// Service
import * as allocationService from "../Services/AllocationService";


function AllocationPage() {
    /*
    AllocationRepository: The allocation page uses the allocation repository to get, update, create, and delete items out 
                          of the allocation table it does this by calling the functions in the service layer to fetch the data 
                          from the JSON.

    AllocationService   : The allocation service is used to validate data after retrieving it from the repo. If it passes all 
                          the validations the data is sent to the hook to update the state.

    UserService         : The user service is used to validate user data. Its used in this component to fetch allocations from 
                          the specified user. 

    JSONHook            : The JSON hook manages the allocations state and updates the ui when changes are made.

    Why this way        : I set up my component this way to separate all the logic into its own layers. For example the hook 
                          updates and maintains the state, the service validates and manipulates the data, and the repo fetches 
                          and sends data.
    */

    const user = allocationService.getAllocationByUserIDService("user_001") // Temporarily Hardcoded
    const userProfile = useUserProfileDisplay({
        ...user,
        paymentsDue: Array.isArray(user.paymentsDue) ? user.paymentsDue : [user.paymentsDue], 
        accounts: [],
    });


    return(
        <>
        <BudgetAllocationTable deleteAllocation={(index) => userProfile.deleteAllocation("user_001", index)} // Temporarily Hardcoded 
                               User={{ ...user, allocations: userProfile.allocations }}/>
        <BudgetAllocationForm addAllocation={(allocation) =>
        userProfile.addAllocation("user_001", allocation)}/> 
        </> // Temporarily Hardcoded 
)}

export default AllocationPage;