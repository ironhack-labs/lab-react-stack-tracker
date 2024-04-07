import { Routes, Route } from "react-router-dom";
import "./App.css";
import companiesJson from "./companies.json";
import technologiesJson from "./technologies.json";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [technologies, setTechnologies] = useState(technologiesJson);
  const [companies, setCompanies] = useState(companiesJson);

  return (
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} />}
        />
        <Route
          path="/tech/:slug"
          element={<TechnologyPage technologies={technologies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
