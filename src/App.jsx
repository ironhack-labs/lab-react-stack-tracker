import { useState } from "react";
import { Route, Routes, Link } from 'react-router-dom'
import "./App.css";
import companiesData from './companies.json'
import technologiesData from './technologies.json'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {

  const [companies, setCompanies] = useState(companiesData)
  const [technologies, setTechnologies] = useState(technologiesData)

  return (
    <div className="App">
      
      {/* <div className="companies-container">
        {companies.map(company => (
          <div key={company.id}>{company.name}</div>
        ))}
      </div>
      <div className="tech-container">
        {technologies.map(technology => (
          <div key={technology.id}>{technology.name}</div>
        ))}
      </div> */}

      {/* info showed fine; dynamic parameters needed to work with the data stored in json */}

      <Navbar />

      <Routes>

        <Route path={"/"} element={ <HomePage companiesData={companies} /> }/>
        <Route path={"/company/:companySlug"} element={ <CompanyPage companies={companies}/> }/>
        <Route path={"/technology/:techSlug"} element={ <TechnologyPage tenchologies={technologies}/> }/> 

      </Routes>

    </div>
  );
}

export default App;
