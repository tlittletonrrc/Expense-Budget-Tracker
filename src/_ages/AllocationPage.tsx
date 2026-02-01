import BudgetAllocationForm from "../Components/BudgetAllocationForm/BudgetAllocationForm";
import BudgetAllocationTable from "../Components/BudgetAllocationTable/BudgetAllocationTable";
import type { UserType } from "../Types/UserType";

function AllocationPage({SetUser, User, setRoute}: {
    SetUser: React.Dispatch<React.SetStateAction<UserType>>
    User: UserType
    setRoute: React.Dispatch<React.SetStateAction<string>>;
}) {

    //set the route state
    function setPage() {
        setRoute("/Allocations");
    }

    setPage()

    return(
        <>
        <BudgetAllocationTable SetUser={SetUser} User={User}/>
        <BudgetAllocationForm setUser={SetUser}/>
        </>
)}

export default AllocationPage;