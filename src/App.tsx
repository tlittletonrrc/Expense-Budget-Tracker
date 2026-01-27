import './App.css'
import { useState } from 'react';
import userdata from "./Data/user.json"
import type { UserType } from "./Types/UserType"
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from './Components/Navbar/navbar';
import AccountsOverview from "./Components/AccountsOverview/accountsOverview"
import DashboardSummaryBox from './Components/DashboardSummaryBox/DashboardSummaryBox';



function App() {
  const [user, setUser] = useState<UserType>(userdata)
  const [route, setRoute] = useState("/")

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
