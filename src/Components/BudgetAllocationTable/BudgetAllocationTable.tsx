import "./BudgetAllocationTable.css"
import type { UserType } from "../../Types/UserType";


function BudgetAllocationTable( {User, deleteAllocation}:
    {User: UserType
     deleteAllocation: (index: number) => void;
    }) {

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Amount Allocated</th>
                    <th>Date Due</th>
                    <th>Delete</th>
                </tr>
            </thead>

        
            {User.allocations.map((a, index) => (
                <tbody>
                    <tr key={index}>
                        <td>{a.category}</td>
                        <td>${a.amount}</td>
                        <td>{a.date}</td>
                        <td><button className="allocation-button" onClick={() => deleteAllocation(index)}>Delete</button></td>
                    </tr>
                </tbody>
            ))}
            
        </table>
    </>
)}

export default BudgetAllocationTable;