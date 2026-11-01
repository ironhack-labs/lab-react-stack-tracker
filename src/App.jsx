import { Routes, Link, Route } from "react-router-dom";
import "./App.css";
import companies from "./companies.json";
import technologies from "./technologies.json";
import { useState } from "react";
import TechnologyPage from "./pages/TechnologyPage";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  const [techValue, setTechValue] = useState(technologies);
  const [compValue, setCompValue] = useState(companies);

  return (
    <div className="App">
      <Navbar />
    
      <Routes>
        <Route path="/" element={<HomePage companies={compValue}/>} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={compValue}/>} />
        <Route path="/tech/:slug" element={<TechnologyPage technologies={techValue} />} />
      </Routes>
    </div>
  );
}

export default App;
