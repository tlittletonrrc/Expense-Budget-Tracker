import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import Test from "./Components/test";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
