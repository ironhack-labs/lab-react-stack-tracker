import { useState } from "react";
import "./App.css";
import companiesData from "./companies.json"
import technologiesData from "./technologies.json"
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {

  const [companies, setCompanies] = useState(companiesData)
  const [technologies, setTechnologies] = useState(technologiesData)

  return (
    <>
    <Navbar />
    {/* <div className="App">
      <h1>LAB | React Stack Tracker</h1>
    </div> */}

    <Routes>
      <Route path="/" element={ <HomePage companies={companies}/>} />
      <Route path="/company/:company" element={ <CompanyPage companies={companies} />} />
      <Route path="/tech/:tech" element={ <TechnologyPage technologies={technologies}/>} />

    </Routes>

    </>
  );
}

export default App;
