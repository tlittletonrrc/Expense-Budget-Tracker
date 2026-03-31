// Components
import BudgetAllocationForm from "../Components/BudgetAllocation/BudgetAllocationForm";
import BudgetAllocationTable from "../Components/BudgetAllocation/BudgetAllocationTable";

// Hooks
import { useAllocations } from "../hooks/useAllocations";

// Service
import '../css/page.css'

function AllocationPage({user}: { user: string }) {
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
    
    const { allocations, addAllocation, deleteAllocation, updateAllocation } = useAllocations(user);


    return(
        <div className="page">
            <h2>Budget Allocation</h2>
            
            <BudgetAllocationForm 
            userID={user}
            addAllocation={addAllocation}
            allocations={allocations}
            updateAllocation={updateAllocation}/>

            <BudgetAllocationTable 
            allocations={allocations} 
            deleteAllocation={deleteAllocation}/>
        </div> 
)}

export default AllocationPage;