import './App.css'
import { useState } from 'react';
import userdata from "./Data/user.json"
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from './Components/Navbar/navbar';
import AccountsOverview from "./Components/AccountsOverview/accountsOverview"
import DashboardSummaryBox from './Components/DashboardSummaryBox/DashboardSummaryBox';

export type UserType = {
    id: string,
    name: string,
    email: string,
    balance: number,
    goal: number,
    due: string
}

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
