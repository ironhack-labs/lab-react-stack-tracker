import { useState } from "react";
import "./App.css";
import CompaniesData from "./companies.json";
import TechnologiesData from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [companies, setCompanies] = useState(CompaniesData);
  // console.log(companies);
  const [technologies, setTechnologies] = useState(TechnologiesData);
  // console.log(technologies);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:companySlug" element={<CompanyPage />} />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
