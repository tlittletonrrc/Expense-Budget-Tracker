// Components
import BudgetAllocationForm from "../Components/BudgetAllocationForm/BudgetAllocationForm";
import BudgetAllocationTable from "../Components/BudgetAllocationTable/BudgetAllocationTable";

// Data
import { getAllAllocations } from "../Repositories/AllocationRepository";

// Hooks
import { useUserProfileDisplay } from "../hooks/JsonHook";

// Types
//import type { UserType } from "../Types/UserType";


function AllocationPage() {

    //sets the route state
    //function setPage() {setRoute("/Allocations")}
    // setPage()

    const user = getAllAllocations()
    const userProfile = useUserProfileDisplay({
        ...user,
        paymentsDue: Array.isArray(user.paymentsDue) ? user.paymentsDue : [user.paymentsDue], 
        accounts: [],
    });


    return(
        <>
        <BudgetAllocationTable deleteAllocation={userProfile.deleteAllocation} User={{ ...user, allocations: userProfile.allocations }}/>
        <BudgetAllocationForm addAllocation={userProfile.addAllocation}/>
        </>
)}

export default AllocationPage;