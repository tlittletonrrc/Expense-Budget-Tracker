import Header from "../Components/Header/Header";
import AccountsOverview from "../Components/AccountsOverview/accountsOverview";
import DashboardSummaryBox from "../Components/DashboardSummaryBox/DashboardSummaryBox";       
import "../css/page.css";

function Dashboard({ userID }: { userID: string }) {
    return (
        <div className="page">
            <Header />
            <DashboardSummaryBox userID={userID} />
            <AccountsOverview />
        </div>
    );
}

export default Dashboard;