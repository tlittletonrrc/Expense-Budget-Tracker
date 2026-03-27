import * as userService from "../../Services/UserService";
import type { UserType } from "@shared/types/UserType"
import { useEffect, useState } from "react";
function DashboardSummaryBox({ userID }: { userID: string }) {
        const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const data = await userService.getUserByIDService(userID);
            setUser(data);
        };

        getUser();
    }, [userID]);
    
    const Summary = [
        {name: "Account Balance", value: user.balance},
        {name: "Savings Goal", value: user.savingsGoal},
        {name: "Left To Spend", value: user.savingsGoal - user.balance}
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