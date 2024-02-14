import "./App.css";
import companiesJson from "./companies.json"
import technoligiesJson from "./technologies.json"
import { useState } from "react";
import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import CompanyPage from  './pages/CompanyPage';
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";

function App() {

  const [companies, setCompanies] = useState(companiesJson)
  const [technologies, setTechnologies] = useState(technoligiesJson)


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage companies={companies}/>}/>
      <Route path="/company/:companySlug" element={<CompanyPage companies={companies} technologies={technologies} />}/>
      <Route path="/tech/:slug" element={<TechnologyPage technologies={technologies}/>}/>
    </Routes>
    </>
  );
}

export default App;
