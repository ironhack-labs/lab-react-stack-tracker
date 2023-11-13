import "./App.css";
import HomePage from "./pages/HomePage"
import CompanyPage from "./pages/CompanyPage"
import TechnologyPage from "./pages/TechnologyPage"
import companiesJson from "./companies.json";
import technologiesJson from "./technologies.json";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [companies, setCompanies] = useState(companiesJson);
  const [technologies, setTechnologies] = useState(technologiesJson);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage companies = {companies}/>}/>
        <Route path="/company/:companySlug"element={ <CompanyPage companies = {companies}/>}/>
        <Route path="/tech/:slug"element={ <TechnologyPage/>} />
      </Routes>
    </div>
  );
}

export default App;
