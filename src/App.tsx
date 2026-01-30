import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import type { UserType } from './Types/UserType';
import userData  from "./Data/user.json"

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from './Components/Navbar/navbar';
import AccountsOverview from "./Components/AccountsOverview/accountsOverview"
import DashboardSummaryBox from './Components/DashboardSummaryBox/DashboardSummaryBox';
import AllocationPage from "./Pages/AllocationPage";
import PiggyBank from "./Pages/PiggyBank"


function App() {
  const [user, setUser] = useState<UserType>(userData)
  const [route, setRoute] = useState<string>("/")
  console.log("You are in " + route)
  
  return (
    <Router>
      <Header/>
      <Navbar/>
      
 
      <Routes>
        <Route path="/" element={
          <>
            <DashboardSummaryBox/>
            <AccountsOverview/>
          </>
        } />
        <Route path="/dashboard" element={
          <>
            <DashboardSummaryBox/>
            <AccountsOverview/>
          </>
        } />
        <Route path="/savings" element={<PiggyBank />} />
        <Route path="/accounts" element={<AccountsOverview/>} />
        <Route path="/Allocations" element={<AllocationPage User={user} SetUser={setUser} setRoute={setRoute}/>} />
        <Route path="/expenses" element={<div>Expenses Page (Coming Soon)</div>} />
        <Route path="/reports" element={<div>Reports Page (Coming Soon)</div>} />
      </Routes>
      
      <Footer/>
    </Router>
  )
}

export default App