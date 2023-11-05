/* código não está rodando, ainda não percebi porque */

/* eslint-disable no-unused-vars */
import "./App.css";
import React from 'react';
import{useState} from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import CompaniesJson from "./companies.json";
import TechnologiesJson from "./technologies.json";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CompanyPage from "./pages/CompanyPage/CompanyPage.jsx";
import TechnologyPage from "./pages/TechnologyPage/TechnologyPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [companies, setCompanies] = useState(CompaniesJson);
  const [technologies, setTechnologies] = useState(TechnologiesJson);

  return (
    <><div className="App">
      <h1>LAB | React Stack Tracker</h1>
    </div><>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage companies={companies} />} />
          <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
          <Route path="/tech/:slug" element={<TechnologyPage technologies={technologies} />} />
        </Routes>
      </></>
  );
}

export default App;
