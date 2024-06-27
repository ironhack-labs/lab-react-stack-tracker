import "./App.css";
import { useState } from "react";
import companiesData from "./companies.json";
import techData from "./technologies.json";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";

function App() {

  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechs] = useState(techData);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage companies={companies} /> } />
        <Route path="/company/:companySlug" element={ <CompanyPage companies={companies} /> } />
        <Route path="/tech/:slug" element={ <TechnologyPage techs={technologies} />} />
      </Routes>
    </div>
  );
}

export default App;
