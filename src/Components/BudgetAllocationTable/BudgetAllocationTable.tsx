import "./BudgetAllocationTable.css"
import type { UserType } from "../../Types/UserType";


function BudgetAllocationTable( {User}:{User: UserType} ) {

    return(
        <>
        <table>
            <th>Category</th>
            <th>Amount Allocated</th>
            <th>Date Due</th>

        
            {User.allocations.map((a, index) => (
                <tr key={index}>
                    <td>{a.category}</td>
                    <td>${a.amount}</td>
                    <td>{a.date}</td>
                </tr>
            ))}
            
        </table>
    </>
)}

export default BudgetAllocationTable;