import { useState } from "react";
import "./App.css";
import companiesObj from "./companies.json";
import technologiesObj from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {

  const [companies, setCompanies] = useState(companiesObj);
  const [technologies, setTechnologies] = useState(technologiesObj);

  return (

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage company = {companies}/>}/>
        <Route path="/company/:companySlug" element={<CompanyPage company = {companies}/>}/>
        <Route path="/tech" element={<TechnologyPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
