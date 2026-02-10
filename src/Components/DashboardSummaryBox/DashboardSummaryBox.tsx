import "./DashboardSummaryBox.css";
import { useUserProfileDisplay } from "../../hooks/JsonHook";
import * as userService from "../../Services/UserService";


function DashboardSummaryBox() {
    const user = userService.getUserByIDService("user_001")
    const userProfile = useUserProfileDisplay({
            ...user,
            accounts: [],
        });
    
    const Summary = [
        {name: "Account Balance", value: userProfile.balance},
        {name: "Left To Spend", value: userProfile.balance - userProfile.savingsGoal},
        {name: "Payments Due", value: userProfile.paymentsDue}
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