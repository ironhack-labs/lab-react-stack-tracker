import "./App.css";
import companiesJSON from "./companies.json"
import technologiesJSON from "./technologies.json"
import HomePage from "./pages/HomePage"
import CompanyPage from "./pages/CompanyPage"
import TechnologyPage from "./pages/TechnologyPage"
import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom"
import { useState } from "react";


function App() {
  const [companies, setCompanies] = useState(companiesJSON)
  const [technologies, setTechnologies] = useState(technologiesJSON)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage companies={companies}/>}></Route>
        <Route path="/companies/:companySlug" element={<CompanyPage companies={companies}/>}></Route>
        <Route path="/tech/:techSlug" element={<TechnologyPage technologies={technologies}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
