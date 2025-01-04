import "./App.css";
import { useState } from "react";

import companiesData from './companies.json'
import technologiesData from './technologies.json'

import Navbar from "./components/Navbar";

import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import { Route, Routes } from "react-router-dom";


function App() {
const [companies, setCompanies] = useState(companiesData)
const [technologies, setTechnologies] = useState(technologiesData)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage companies={companies} />}/>
      <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
      <Route path="/tech/:slug" element={<TechnologyPage companies={companies}/>}/>

        
      </Routes>
    </div>
  );
}

export default App;
