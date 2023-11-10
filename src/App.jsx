import { useState } from "react";
import "./App.css";


import { Routes, Route } from "react-router-dom";

import companiesArray from './companies.json'
import technologieArray from './technologies.json'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";



function App() {
  const [companies, setCompanies] = useState(companiesArray)
  const [technologies, setTechnologies] = useState(technologieArray)


  return (
    <div className="App">
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage companies={companies} />} />
          <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
          <Route path="/tech/:techSlug" element={<TechnologyPage technologies={technologies} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
