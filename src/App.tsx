import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from './Components/Navbar/navbar';
import AccountsOverview from "./Components/AccountsOverview/accountsOverview"
import DashboardSummaryBox from './Components/DashboardSummaryBox/DashboardSummaryBox';
import PiggyBank from './pages/PiggyBank';

function App() {
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
        <Route path="/categories" element={<div>Categories Page (Coming Soon)</div>} />
        <Route path="/expenses" element={<div>Expenses Page (Coming Soon)</div>} />
        <Route path="/reports" element={<div>Reports Page (Coming Soon)</div>} />
      </Routes>
      
      <Footer/>
    </Router>
  )
}

export default App