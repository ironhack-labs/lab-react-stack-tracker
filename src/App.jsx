import "./App.css";
import { useState } from "react";
import companiesInfo from "./companies.json";
import techInfo from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  const [companies, setCompanies] = useState(companiesInfo);
  //console.log(companies);
  const [techs, setTechs] = useState(techInfo);

  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React Stack Tracker</h1>
      <>
        <Routes>
        <Route path="/" element={<HomePage companiesArray={companies} />} />
          <Route
            path="/company/:companySlug"
            element={<CompanyPage companies={companies} />}
          />
          <Route
            path="/tech/:techSlug"
            element={<TechnologyPage technologies={techs} />}
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
