import useUser from "../../hooks/userUsers";

function DashboardSummaryBox({ userID }: { userID: string }) {
    const user = useUser(userID);
    if (!user) return <div>Loading summary</div>;
    
    const Summary = [
        {name: "Account Balance", value: user.balance},
        {name: "Savings Goal", value: user.savingsGoal},
        {name: "Left To Save", value: user.savingsGoal - user.balance}
    ]

    return(
    <div className="summary-box"> 
        <table>
            <tbody>
                <tr>
                    {Summary.map(item => (
                        <th key={item.name}>{item.name}</th>
                    ))}
                </tr>

                <tr>
                    {Summary.map(item => (
                        <td key={item.name}>{item.value}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    </div>
);
}

export default DashboardSummaryBox;