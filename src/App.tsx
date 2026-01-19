import './App.css'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from './Components/Navbar/navbar';
import AccountsOverview from "./Components/AccountsOverview/accountsOverview"
import DashboardSummaryBox from './Components/DashboardSummaryBox/DashboardSummaryBox';

function App() {
  return (
    <>
      <Header/>

      <Navbar/>

      <DashboardSummaryBox/>

      <AccountsOverview/>
      
      <Footer/>
    </>
  )
}

export default App
