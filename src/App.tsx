import { useState } from 'react'
import './App.css'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import DashboardSummaryBox from './Components/DashboardSummaryBox/DashboardSummaryBox';

function App() {
  return (
    <>
      <Header/>

      <DashboardSummaryBox/>

      <Footer/>
    </>
  )
}

export default App
