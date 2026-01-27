import "./BudgetAllocationForm.css"
//import Navbar from './Components/Navbar/navbar';
import type { UserType } from "../../App";


export function budgetAllocation({
    user,
    setUser
    }: {
    user:UserType
    setUser: React.Dispatch<React.SetStateAction<UserType>>

    }) {
    function addAllocation(u:React.FormEvent<HTMLFormElement>) {
        const form = u.currentTarget;
        const formData = new FormData(form);

        setUser(prev =>({
            ...prev,
            allocations:[form, formData]
        }))
        

    }

    return(
        <>
            <form method="post" onSubmit={addAllocation}>
                <input type="text" name="Item" placeholder="Category" minLength={3} required/>
                <input type="text" name="Amount" placeholder="Amount Allocated" minLength={3} required/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}