import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import companies from "./companies.json";
import technologies from "./technologies.json";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

import Navbar from "./components/Navbar";

function App() {
  const [companiesData, setCompaniesData] = useState(companies);
  const [technologiesData, setTechnologiesData] = useState(technologies);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage companiesList={companiesData} />} />
        <Route path="/company/:companySlug" element={<CompanyPage />} />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
