import "./App.css";
import companiesData from "./companies.json";
import technologiesData from "./technologies.json";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import { useState } from "react";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
        <Route path="/tech/:slug" element={<TechnologyPage technologies={technologies} />} />
      </Routes>
    </div>
  );
}

export default App;

