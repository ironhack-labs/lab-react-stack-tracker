import "./App.css";
import technologyData from "./technologies.json";
import companyData from "./companies.json";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import ErrorPage from "./pages/ErrorPage";


function App() {

  const [techs, setTechs] = useState(technologyData);
  const [companies, setCompanies] = useState(companyData);


  return (
    <div className="App">
      <Navbar />
      <div  className="appContainer">
      <Routes>
        <Route path="/" element={<HomePage companies={companies}/>}/>
        <Route path="/company/:companySlug" element={<CompanyPage companies={companyData} />}/>
        <Route path="/tech/:slug" element={<TechnologyPage technology={technologyData}/>} /> 
        <Route path="*" element={<ErrorPage />} />      
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
