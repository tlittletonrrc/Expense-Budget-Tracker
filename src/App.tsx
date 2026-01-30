import './App.css'
import { useState } from 'react';
import userdata from "./Data/user.json"
import type { UserType } from "./Types/UserType"
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from './Components/Navbar/navbar';
import AccountsOverview from "./Components/AccountsOverview/accountsOverview"
import DashboardSummaryBox from './Components/DashboardSummaryBox/DashboardSummaryBox';
import AllocationPage from './Pages/AllocationPage';


function App() {
  const [user, setUser] = useState<UserType>(userdata)
  const [route, setRoute] = useState("/")

  return (
    <>
      <Header/>

      <Navbar/>
      
      {/* Testing in here */}
      <AllocationPage SetUser={setUser} User={user}/>
      {/* end */}

      <DashboardSummaryBox/>

      <AccountsOverview/> 
      
      <Footer/>
    </>
  )
}

export default App
