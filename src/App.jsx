import "./App.css";
import techJSON from "./technologies.json"
import companiesJSON from "./companies.json"
import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";




function App() {

  const [tech, setTech] = useState(techJSON);
  const [companies, setCompanies] = useState(companiesJSON); 
      // passing props to the HomePage:  companies={companies}
return (
    <div className="App">
      <Navbar/>
      <Routes> 
        <Route path="/" element={<HomePage companies={companies}/>}/> 
        <Route path="/company/:companySlug" element={<CompanyPage details={companiesJSON}/>}/>
        <Route path="/technology:slug" element={<TechnologyPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
