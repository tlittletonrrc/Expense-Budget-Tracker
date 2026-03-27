import Header from "../Components/Header/Header";
import type { UserType } from "@shared/types/UserType";
import AccountsOverview from "../Components/AccountsOverview/accountsOverview";
import DashboardSummaryBox from "../Components/DashboardSummaryBox/DashboardSummaryBox";       
import "../css/page.css";

function Dashboard({ user }: { user: string }) {
    return (
        <div className="page">
            <Header />
            <DashboardSummaryBox user={user} />
            <AccountsOverview />
        </div>
    );
}

export default Dashboard;