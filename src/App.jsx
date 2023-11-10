import "./App.css";
import companies from "./companies.json";
import technologies from "./technologies.json";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [companiesToDisplay, setCompaniesToDisplay] = useState(companies);
  const [technologiesToDisplay, setTechnologiesToDisplay] =
    useState(technologies);

  return (
    <div className="App">
      {/* <h1>LAB | React Stack Tracker</h1> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route path="/company/:companySlug" element={<CompanyPage />} />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
