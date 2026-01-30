import "./BudgetAllocationTable.css"
import type { UserType } from "../../Types/UserType";


function BudgetAllocationTable( {User, SetUser}:
    {User: UserType
     SetUser: React.Dispatch<React.SetStateAction<UserType>>
    } ) {

    function deleteAllocation(index: number) {
        SetUser({
            ...User,
            allocations: User.allocations.filter((_, i) => i !== index)
    });
}

    return(
        <>
        <table>
            <th>Category</th>
            <th>Amount Allocated</th>
            <th>Date Due</th>
            <th>Delete</th>

        
            {User.allocations.map((a, index) => (
                <tr key={index}>
                    <td>{a.category}</td>
                    <td>${a.amount}</td>
                    <td>{a.date}</td>
                    <td><button className="allocation-button" onClick={() => deleteAllocation(index)}>Delete</button></td>
                </tr>
            ))}
            
        </table>
    </>
)}

export default BudgetAllocationTable;