import { useState } from "react";
import "./App.css";
import companiesJson from './companies.json';
import techJson from './technologies.json';
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import TechnologyPage from "./pages/TechnologyPage";
import CompanyPage from "./pages/CompanyPage";



function App() {

  const [companies, setCompanies] = useState(companiesJson);
  const [technologies, setTechnologies] = useState(techJson);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage companies={companies}/>}></Route>
        <Route path="/company/:companySlug" element={<CompanyPage companies = {companies}/>}></Route>
        <Route path="/tech/:techSlug" element={<TechnologyPage  technologies={technologies}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

