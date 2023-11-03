/* eslint-disable no-unused-vars */

import companyJson from '/src/companies.json';
import techJson from '/src/technologies.json';
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route} from "react-router-dom";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import HomePage from "./pages/HomePage";
function App() {
  const [companyData, setCompanyData] = useState(companyJson);
  const [techData, setTechData] = useState(techJson);

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage companyArr = {companyData}/>}/> 
          <Route path="/company/:companySlug" element={<CompanyPage companyArr={companyData} techArr={techData}/>} />
          <Route path="/tech/:slug" element={<TechnologyPage techArr = {techData}/>} />
      </Routes>
    </>
  );
}

export default App;
