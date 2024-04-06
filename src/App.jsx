import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import companiesData from "./companies.json"; // Assuming companies.json is correctly formatted
import technologiesData from "./technologies.json"; // Assuming technologies.json is correctly formatted
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  // Fetch data on component mount (assuming data is static in JSON files)
  useEffect(() => {
    setCompanies(companiesData);
    setTechnologies(technologiesData);
  }, []); // Empty dependency array ensures data is fetched only once

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage companies={companies} technologies={technologies} />
          }
        />
        <Route path="/company/:companySlug" component={<CompanyPage />} />
        <Route path="/tech/:slug" component={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
