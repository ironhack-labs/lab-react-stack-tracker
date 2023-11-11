// src/App.js
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import "./App.css";
import companies from "./companies.json";
import technologies from "./technologies.json";

function App() {
  const [companiesData, setCompaniesData] = useState(companies);
  const [technologiesData, setTechnologiesData] = useState(technologies);

  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage companies={companiesData} />}
        />
        <Route
          path="/company/:slug"
          element={<CompanyPage companies={companiesData} />}
        />
        <Route
          path="/technology"
          element={<TechnologyPage technologies={technologiesData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
