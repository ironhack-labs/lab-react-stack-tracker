import "./App.css";
import React from "react";
import allComps from './companies.json'; 

import allTechs from './technologies.json'; 

import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";


function App() {
  //estos estado son los que tendremos que actualizar
  const [miTechs, setTechs] = useState(allTechs)
  const [miComps, setComp] = useState(allComps)

  return (
    <div className="App">
      {/* <h1>LAB | React Stack Tracker</h1> */}
      <Navbar />
      
      <Routes>
        <Route 
        path="/"
        element={<HomePage companies={miComps}/>}
        />
        <Route 
        path="/company/:companySlug"
        element={<CompanyPage companies={miComps}/>}
        />
        <Route 
        path="/tech/:slug"
        element={<TechnologyPage />}
        />
       {/*  <Route 
        path="*" 
        element={<NotFound />} 
        /> */}
      </Routes>
    
      

    </div>
  );
}

export default App;
