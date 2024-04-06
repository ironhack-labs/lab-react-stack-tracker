import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import companies from "./companies.json";
import technologies from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

/**
 * Initializes the App component with state variables for companies and technologies.
 *
 * @return {JSX.Element} The JSX element representing the entire App component.
 */
function App() {
  const [companies, setCompanies] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    setCompanies(companies); // Assuming you already have companies data
    setTechnologies(technologies); // Assuming you already have technologies data
  }, []); // Empty dependency array ensures data is fetched only once

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/company/:companySlug" component={CompanyPage} />
        <Route path="/tech/:slug" component={TechnologyPage} />
      </Routes>
    </div>
  );
}

export default App;
