/* eslint-disable no-unused-vars */
import "./App.css";
import companiesJson from "./companies.json"
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import technologiesJson from "./technologies.json"
import {Routes,Route} from "react-router-dom"
import { useState } from "react";

function App() {
  const [companies,setCompanies] = useState(companiesJson)
  return (
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>
      <Routes>

        <Route path="/" element={<HomePage companies={companies} setCompanies={setCompanies}></HomePage>}></Route>
        
        <Route path="/company/:companySlug" element={<CompanyPage></CompanyPage>}></Route>
        <Route path="/tech/:slug" element={<TechnologyPage></TechnologyPage>}></Route>

      </Routes>
    </div>
  );
}
export default App;
