import "./BudgetAllocationForm.css"
//import Navbar from './Components/Navbar/navbar';
import type { UserType } from "../../Types/UserType";


function BudgetAllocationForm({setUser}: {
    setUser: React.Dispatch<React.SetStateAction<UserType>>
    }) {
    function addAllocation(u:React.FormEvent<HTMLFormElement>) {
        u.preventDefault()

        const form = u.currentTarget;
        const formData = new FormData(form);

        const item = formData.get("Item") as string
        const amount = Number(formData.get("Amount"))
        const date = formData.get("Date") as string

        const newAllocation = { category: item, amount, date };

        setUser(prev => {
            const exists = prev.allocations.some(a => a.category === item);

            if (exists) {
                return {
                    ...prev,
                    allocations: prev.allocations.map(a =>
                        a.category === item ? { ...a, amount, date } : a
                        )
                    };
                }
            return {
                ...prev,
                allocations: [...prev.allocations, newAllocation]
            }
        }
    )
};

    return(
        <>
            <form className="allocation-form" onSubmit={addAllocation}>
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