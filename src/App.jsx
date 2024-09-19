import "./App.css";
import technologiesData from "./technologies.json";
import companiesData from "./companies.json";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { useState } from "react";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);

  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage companies={companies} />} />
          <Route
            path="company/:companySlug"
            element={<CompanyPage companies={companies} />}
          />
          <Route
            path="tech/:slug"
            element={<TechnologyPage technologies={technologies} companies={companies}/>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
