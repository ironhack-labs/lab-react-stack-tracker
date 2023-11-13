import { useState } from "react";
import "./App.css";
import companiesData from "./companies.json";
import technologiesData from "./technologies.json";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import CompanyPage from "./pages/CompanyPage";
function App() {
const [companies ,setCompanies] = useState (companiesData);
const [technologies, setTechnologies] = useState (technologiesData);





  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/technology"  element={<TechnologyPage/>}/>
        <Route path="/company" element={<CompanyPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

