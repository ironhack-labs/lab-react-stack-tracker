import CompaniesData from "./companies.json";
import technologiesData from "./technologies.json";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(CompaniesData);
  const [technologies, setTechnologies] = useState(technologiesData);
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage  companies= {companies}/>} />
          <Route path="/company/:companyId" element={<CompanyPage companies= {companies} />} />
          <Route path="/tech/:companyId" element={<TechnologyPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
