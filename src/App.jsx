import { useState } from "react";
import "./App.css";
import companiesJSON from './companies.json'
import technologiesJSON from './technologies.json'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";


function App() {
  const [companies, setCompanies] = useState(companiesJSON)
  const [tech, setTech] = useState(technologiesJSON)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
