import "./App.css";
import companiesJson from './companies.json';
import technologiesJson from './technologies.json';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";



function App() {
  const [companies, setCompanies] = useState(companiesJson)
  const [technologies, setTechnologies] = useState(technologiesJson)
  return (
    <div className="App">
      <h1></h1>
      <Navbar className />
      <Routes>
        <Route path='/' element={<HomePage companies={companies} />} />
        <Route path='/company/:companySlug' element={<CompanyPage companies={companies} />} />
        <Route path='/tech/:slug' element={<TechnologyPage technologies={technologies} />} />
      </Routes>
    </div>
  );
}

export default App;
