import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Companies from "./companies.json"
import Technologies from "./Technologies.json"
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';
import NotFound from './pages/NotFound';



function App() {

  const [companiesArr, setCompanies] = useState(Companies);
  const [technologiesArr, setTechnologies] = useState(Technologies);

  return (
    <div className="App">
      <Navbar />
      {/* <h1>LAB | React Stack Tracker</h1>

    <h2>Companies</h2>
    <ul>
      {companiesArr.map((company, index) => (
        <li key={index}>
          {company.name}
        </li>
        ))}
    </ul>

    <h2>Technologies</h2>
    <ul>
      {technologiesArr.map((tech, index) => (
        <li key={index}>
          {tech.name}
        </li>
      ))}
    </ul> */}

      <Routes>
      <Route path={"/"} element={<HomePage companiesArr={companiesArr}/>}></Route>
        <Route path={"/company/:companySlug"} element={<CompanyPage companiesArr={companiesArr}/>}></Route>
        <Route path={"/tech/:slug"} element={<TechnologyPage />}></Route>
        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
