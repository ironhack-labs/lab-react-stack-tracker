import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import companies from './companies.json';
import technologies from './technologies.json';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';
import "./App.css";

function App() {

  const [compToLog, setCompToLog] = useState(companies);
  const [techToLog, setTechToLog] = useState(technologies);

  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage companiesArr={compToLog} />} />
        <Route path='/company/:companySlug' element={<CompanyPage companiesArr={compToLog} techArr={techToLog} />} />
        <Route path='/tech/:slug' element={<TechnologyPage techArr={techToLog} />} />
      </Routes>

    </div>
  );
}

export default App;
