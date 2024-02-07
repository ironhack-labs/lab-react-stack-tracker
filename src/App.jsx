import { useState } from "react";
import "./App.css";
import companiesData from "./companies.json";
import technologiesData from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, settechnologies] = useState(technologiesData);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage companies={companies}/>} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
        <Route path="/tech/:slug" element={<TechnologyPage />}  />
        <Route path="*" element={<p>404, this page doesnt exist...</p>} />
      </Routes>

    </div>
  );
}

export default App;
