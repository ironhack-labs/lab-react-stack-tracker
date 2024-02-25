import { useState } from "react";
import "./App.css";
import listCompanies from "./companies.json"
import listTechnologies from "./technologies.json"
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import TechnologyPage from "./pages/TechnologyPage";
import CompanyPage from "./pages/CompanyPage";

function App() {

  const [ allCompanies, setAllCompanies] = useState(listCompanies)
  //console.log(allCompanies)
  const [allTechnologies, setAllTechnologies] = useState(listTechnologies)

  return (
    <div className="App">
      <div className="navbar"> <Navbar /></div>
      <Routes>
      
      <Route path={"/"} element={<HomePage allCompanies={allCompanies}/>}/>
      
      
      <Route path={"/company/:companySlug"} element={<CompanyPage allCompanies={allCompanies}/>}/>
      
      
      <Route path={"/tech/:slug"} element={<TechnologyPage allTechnologies={allTechnologies}/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
