import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Companies from "./companies.json"
import Technologies from "./Technologies.json"



function App() {

  const [companiesArr, setCompanies] = useState(Companies);
  const [technologiesArr, setTechnologies] = useState(Technologies);

  return (
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>

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
    </ul>

      <Routes>

      </Routes>
    </div>
    
  );
}

export default App;
