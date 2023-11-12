import "./App.css";
import companiesList from '../src/companies.json'
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Router, Routes, Route  } from "react-router-dom";
import { Fragment } from "react";

function App(props) {
  let companies = companiesList
 
  return (
     <div className="App">
      <>
      <Navbar /> 
      </>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/company/:companySlug" element={<CompanyPage companiesSlu = {companiesList}/>} />
        <Route path="/tech/:slug" element={<TechnologyPage/>} />
      </Routes>
    </div>
    
  );
}

export default App;
