import { useState, useEffect } from "react";
import "./App.css";
import companiesData from './companies.json'
import technologiesData from './technologies.json'
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom'




function App() {
 const [companies, setCompanies] = useState([]);
 const [technologies, setTechnologies] = useState([]);

 useEffect(() => {
  
  setCompanies(companiesData);
  setTechnologies(technologiesData);
}, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/company/:companySlug" element={ <CompanyPage companhies= {companies}/>} />
        <Route path="/tech/:slug" element={ <TechnologyPage />} />
      </Routes>
    
    </div>
  );
}

export default App;
