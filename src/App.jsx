import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import stacks from './companies.json'
import techs from './technologies.json'
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import HomePage from "./pages/HomePage";
import { useNavigate } from 'react-router-dom';


function App() {

  const [companiesToDisplay, setCompaniesToDisplay] = useState(stacks)
  const [techsToDisplay, setTechsToDisplay] = useState(techs)

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage companies={companiesToDisplay} />} />
        <Route path='/company/:companySlug' element={<CompanyPage companies={companiesToDisplay} />} />
        <Route path='/tech/:techSlug' element={<TechnologyPage technologies={techsToDisplay} />} />
      </Routes>
      
    </div>
  );
}

export default App;
