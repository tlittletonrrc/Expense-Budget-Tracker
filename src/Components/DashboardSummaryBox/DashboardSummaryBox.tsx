import "./DashboardSummaryBox.css";

function DashboardSummaryBox() {
    return(
    <div className="summary-box"> 
        <table>
            <tr>
                <th>Account Balance</th>
                <th>Left To Spend</th>
                <th>Payments Due</th>
            </tr>

            <tr>
                <td>
                    $2000
                </td>
                <td>
                    $1000
                </td>
                <td>
                    January 1st, 2026
                </td>
            </tr>
        </table>
    </div>
);
}

export default DashboardSummaryBox;