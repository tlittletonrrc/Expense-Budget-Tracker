import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from './Components/Navbar/navbar';
import AllocationPage from "./Pages/AllocationPage";
import PiggyBank from "./Pages/PiggyBank"
import AccountsOverviewPage from "./Pages/accountsOverviewPage"
import Dashboard from './Pages/dashboard';

function App() {
  const [route, setRoute] = useState<string>("/")
  console.log("You are in " + route)
  
  return (
    <Router>
      <Navbar/>
 
      <Routes>
        <Route path="/" element={ <> </> } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/savings" element={<PiggyBank />} />
        <Route path="/accounts" element={<AccountsOverviewPage setRoute={setRoute}/>} />
        <Route path="/Allocations" element={<AllocationPage/>} />
        <Route path="/expenses" element={<div>Expenses Page (Coming Soon)</div>} />
        <Route path="/reports" element={<div>Reports Page (Coming Soon)</div>} />
      </Routes>
      
      <Footer/>
    </Router>
  )
}

export default App