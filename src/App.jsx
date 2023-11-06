import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import companiesJson from "./companies.json";
import techJson from "./technologies.json";

function App() {
  const [companyData, setCompanyData] = useState(companiesJson);
  const [techData, setTechData] = useState(techJson);

  return (
    <div id="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companies={companyData} />} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={companyData} />} />
        <Route path="/tech/:slug" element={<TechnologyPage technologies={techData} />} />
      </Routes>
    </div>
  );
}

export default App;
