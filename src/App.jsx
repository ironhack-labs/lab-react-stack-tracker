import { Routes, Route } from "react-router-dom"; // <== IMPORT
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import companiesData from "./companies.json";
import technologiesData from "./technologies.json";
import { useState } from "react";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
        <Route path="/tech/:techSlug" element={<TechnologyPage technologies={technologies} />} />
      </Routes>
    </div>
  );
}

export default App;
