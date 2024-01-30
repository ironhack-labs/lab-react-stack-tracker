import "./App.css";
import { useState } from "react";
import companiesJson from './companies.json'
import technologiesJson from './technologies.json'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import CompanyPage from "./pages/CompanyPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<HomePage companies={companiesJson}/>}/>
        <Route path='/company/:companySlug' element={<CompanyPage companies={companiesJson}/>}/>
        <Route path='/tech/:slug' element={<TechnologyPage/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
