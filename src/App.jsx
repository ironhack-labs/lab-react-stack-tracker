import React, { useState } from "react";
import "./App.css";
import companiesData from "./companies.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import HomePage from "./pages/HomePage";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState([]);

  return (
    <div className="App">
      <div className="TopBar">
      <h1>LAB | React Stack Tracker</h1>
      </div><div className="CompanyPage">

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
