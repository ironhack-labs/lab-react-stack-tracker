import { Route, Routes } from "react-router-dom";
import "./App.css";
import companiesJson from "./companies.json"
import Navbar from "./components/Navbar";
import technologiesJson from "./technologies.json"
import {useState} from "react"
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import CompanyPage from "./pages/CompanyPage";


function App() {
  
  const [companiesArr, setCompaniesArr] = useState(companiesJson)
  const [technologiesArr, setTechnologiesArr] = useState(technologiesJson)
  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage companies={companiesArr}/>}/>
        <Route path="/company/:companySlug" element={<CompanyPage />}/>
        <Route path="/tech/:slug" element={<TechnologyPage />}/>
      </Routes>
    </div>
  );
}

export default App;
