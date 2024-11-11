import { Route, Routes } from "react-router-dom";
import "./App.css";
import companiesData from "./companies.json";
import Navbar from "./components/Navbar";
import technologiesData from "./technologies.json";
import { useState } from "react";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tech/:slug" element={<TechnologyPage />} />
          <Route path="/company/:companySlug" element={<CompanyPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
