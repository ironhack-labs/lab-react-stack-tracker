import { Route, Routes } from "react-router-dom";
import "./App.css";
import companiesJSON from "./companies.json";
import technologiesJSON from "./technologies.json";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { useState } from "react";

function App() {

  const [companies, setCompanies] = useState(companiesJSON);
  const [technologies, setTechnologies] = useState(technologiesJSON)


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companiesArr={companies} />} />
        <Route path="/company/:companySlug" element={<CompanyPage companiesArr={companies} />} />
        <Route path="/tech/:slug" element={<TechnologyPage technologiesArr={technologies} />} />
      </Routes>
    </div>
  );
}

export default App;
