import { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import companies from "./companies.json";
import technologies from "./technologies.json";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import "./App.css";

function App() {
  const [companiesToDisplay, setCompanies] = useState(companies);
  console.log(companies)
  const [technologiesToDisplay, setTechnologies] = useState(technologies);

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companiesArr={companiesToDisplay}/>} />
        <Route path="/company/:companySlug" element={<CompanyPage />} />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
    </>
  );
}

export default App;
