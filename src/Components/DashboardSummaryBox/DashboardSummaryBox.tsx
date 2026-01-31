import "./DashboardSummaryBox.css";
import user from "../../Data/user.json"

const Summary = [
    {name: "Account Balance", value: user.balance},
    {name: "Left To Spend", value: user.balance - user.savingsGoal},
    {name: "Payments Due", value: user.paymentsDue}
]

function DashboardSummaryBox() {
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