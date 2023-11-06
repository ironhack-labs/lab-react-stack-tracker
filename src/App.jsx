import "./App.css";
import Navbar from "./components/Navbar.jsx";
import companiesData from "./companies.json";
import technologiesData from "./technologies.json";
import { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import CompanyPage from "./pages/CompanyPage.jsx";
import TechnologyPage from "./pages/TechnologyPage.jsx";
import { Routes, Route } from 'react-router-dom'

function App() {

  const[companies, setCompany] = useState (companiesData);
  const[technologies, setTechnologies] = useState (technologiesData);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element ={<HomePage/>} />
        <Route path = "/company/:companySlug" element ={<CompanyPage/>} />
        <Route path= "/tech/:slug" element ={<TechnologyPage/>} />
      </Routes>
    </div>
  );
}

export default App;
