import "../../css/table.css"
import type { Allocation } from "@shared/types/Allocation";
//import type { UserType } from "@shared/types/UserType";


function BudgetAllocationTable( {allocations, deleteAllocation}:
    {allocations: Allocation[]
     deleteAllocation: (index: number) => void;
    }) {
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

    return (
        <>
            <table className="allocation-card">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Amount Allocated</th>
                        <th>Date Due</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {allocations.map((a, index) => (
                        <tr key={index}>
                            <td>{a.category}</td>
                            <td>${a.amount}</td>
                            <td>{a.date}</td>
                            <td>
                                <button
                                    onClick={() => deleteAllocation(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default BudgetAllocationTable;