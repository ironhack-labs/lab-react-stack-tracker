import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import CompaniesJson from "./companies.json";
import TechnologiesJson from "./technologies.json";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
    const [companies, setCompanies] = useState(CompaniesJson);
    const [technologies, setTechnologies] = useState(TechnologiesJson);

    return (
        <div className="App">
            <h1>LAB | React Stack Tracker</h1>
            <Routes>
                <Route path="/" element={<HomePage companiesArray={companies} />} />
                <Route path="/company/:companySlug" element={<CompanyPage companiesArray={companies} />} />
                <Route path="/tech/:slug" element={<TechnologyPage />} />
            </Routes>
        </div>
    );
}

export default App;
