import "./DashboardSummaryBox.css";

const Summary = [
    {name: "Account Balance", value: 1000},
    {name: "Left To Spend", value: 500},
    {name: "Payments Due", value: 500}
]

function DashboardSummaryBox() {
    return(
    <div className="summary-box"> 
        <table>
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
        </table>
    </div>
);
}

export default DashboardSummaryBox;