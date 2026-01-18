import './App.css'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AccountsOverview from "./Components/AccountsOverview/accountsOverview"
import DashboardSummaryBox from './Components/DashboardSummaryBox/DashboardSummaryBox';

function App() {
  return (
    <>
      <Header/>

      <DashboardSummaryBox/>

      <AccountsOverview/>
      
      <Footer/>
    </>
  )
}

export default App
