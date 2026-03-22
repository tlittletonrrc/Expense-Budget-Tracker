import "../../css/form.css"
import type { Allocation } from "@shared/types/Allocation";

function BudgetAllocationForm({ addAllocation, userID}: { 
    addAllocation: (allocation: Allocation) => void,
    userID: string }) {
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
    
    function createAllocation(u:React.FormEvent<HTMLFormElement>) {
        u.preventDefault()

        const form = u.currentTarget;
        const formData = new FormData(form);

        const category = formData.get("Item") as string
        const amount = Number(formData.get("Amount"))
        const date = formData.get("Date") as string
        const unique_id = Date.now().toString(36) + Math.random().toString(36).slice(2)

        const newAllocation: Allocation = {userID: String(userID), allocation_id: unique_id, category: category, amount:amount, date: date };

        addAllocation(newAllocation)
};

    return(
        <>
            <form className="allocation-form" onSubmit={createAllocation}>
                <h4 className="allocation-form-title">New Allocation</h4>
                <div className="inputs">
                    <input className="input-bar" type="text" name="Item" placeholder="Category" minLength={3} required/>
                    <input className="input-bar" type="number" name="Amount" placeholder="Amount Allocated" min={0} required/>
                    <input className="input-bar" type="date" name="Date" required/>
                </div>
                <button className="allocation-button" type="submit">Submit</button>
            </form>
        </>
    )
}

export default BudgetAllocationForm