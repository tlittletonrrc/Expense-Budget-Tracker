import './App.css'
import { useState } from 'react';
import userdata from "./Data/user.json"
import type { UserType } from "./Types/UserType"
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from './Components/Navbar/navbar';
import AccountsOverview from "./Components/AccountsOverview/accountsOverview"
import DashboardSummaryBox from './Components/DashboardSummaryBox/DashboardSummaryBox';
import BudgetAllocationTable from './Components/BudgetAllocationTable/BudgetAllocationTable';
import BudgetAllocationForm from './Components/BudgetAllocationForm/BudgetAllocationForm';


function App() {
  const [user, setUser] = useState<UserType>(userdata)
  const [route, setRoute] = useState("/")

  return (
    <>
      <Header/>

      <Navbar/>
      
      {/* Testing in here */}
      <BudgetAllocationTable User={user}/>
      <BudgetAllocationForm setUser={setUser}/>
      {/* end */}

      <DashboardSummaryBox/>

      <AccountsOverview/> 
      
      <Footer/>
    </>
  )
}

export default App
