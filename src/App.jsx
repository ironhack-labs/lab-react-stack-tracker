import "./App.css";
import { useState } from "react";

import companiesData from './companies.json'
import technologiesData from './technologies.json'

import Navbar from "./components/Navbar";

import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";


function App() {
const [companies, setCompanies] = useState('')
const [technologies, setTechnologies] = useState('')

  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
