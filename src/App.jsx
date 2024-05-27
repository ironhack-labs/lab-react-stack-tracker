import "./App.css";
import companiesData from './companies.json';
import technologiesData from './technologies.json';
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage allCompanies={companies}/>}/>
        <Route path='/company/:companySlug' element={<CompanyPage allCompanies={companies}/>} />
        <Route path='/tech/:technologySlug' element={<TechnologyPage allTechnologies={technologies}/>} />
      </Routes>

    </div>
  );
}

export default App;
