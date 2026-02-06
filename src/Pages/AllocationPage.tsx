// Components
import BudgetAllocationForm from "../Components/BudgetAllocationForm/BudgetAllocationForm";
import BudgetAllocationTable from "../Components/BudgetAllocationTable/BudgetAllocationTable";

// Data
import { getAllAllocations } from "../Repositories/AllocationRepository";

// Hooks
import { useUserProfileDisplay } from "../hooks/JsonHook";

// Types
import type { UserType } from "../Types/UserType";


function AllocationPage({User, setRoute}: {
    SetUser: React.Dispatch<React.SetStateAction<UserType>>
    User: UserType
    setRoute: React.Dispatch<React.SetStateAction<string>>;
}) {

    //sets the route state
    function setPage() {setRoute("/Allocations")}

    const user = getAllAllocations()
    const userProfile = useUserProfileDisplay({
        ...user,
        paymentsDue: Array.isArray(user.paymentsDue) ? user.paymentsDue : [user.paymentsDue], 
        accounts: [],
    });

    setPage()

    return(
        <>
        <BudgetAllocationTable deleteAllocation={userProfile.deleteAllocation} User={{ ...User, allocations: userProfile.allocations }}/>
        <BudgetAllocationForm addAllocation={userProfile.addAllocation}/>
        </>
)}

export default AllocationPage;