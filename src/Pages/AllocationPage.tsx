import BudgetAllocationForm from "../Components/BudgetAllocationForm/BudgetAllocationForm";
import BudgetAllocationTable from "../Components/BudgetAllocationTable/BudgetAllocationTable";
import type { UserType } from "../Types/UserType";

function AllocationPage({SetUser, User}: {
    SetUser: React.Dispatch<React.SetStateAction<UserType>>
    User: UserType
}) {

    return(
        <>
        <BudgetAllocationTable SetUser={SetUser} User={User}/>
        <BudgetAllocationForm setUser={SetUser}/>
        </>
)}

export default AllocationPage;