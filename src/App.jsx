import "./App.css";
import companiesList from '../src/companies.json'
import technologiesList from '../src/technologies.json'
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";



function App() {
  const [companies, setCompany] = useState(companiesList);
  const [technologies, setTechnology] = useState(technologiesList);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage companiesArr = {companies} />}/>
        <Route path="/company/:companySlug" element={<CompanyPage companiesArr = {companies} />}/>
        <Route path="/tech/:slug"  element={<TechnologyPage />}/>
      </Routes>
    </>
  );
}

export default App
