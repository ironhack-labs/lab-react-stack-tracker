import "./App.css";
import { useState } from "react";
import companiesJson from './companies.json'
import technologiesJson from './technologies.json'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {

  const [companies, setCompanies] = useState(companiesJson)
  const [technologies, setTechnologies] =useState(technologiesJson)

  return (<>
    <div className="App">
    <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage companies={companies} />} ></Route>
        <Route path='/:companySlug' element={<CompanyPage companies={companies}/>} ></Route>
        <Route path='/:slug' element={<TechnologyPage technologies={technologies} />} ></Route>
      </Routes>
    </div>
  </>);
}

export default App;
