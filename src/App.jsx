import { useState } from "react";
import "./App.css";
import companies from './companies.json'
import technologies from './technologies.json'
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage"
import TechnologyPage from "./pages/TechnologyPage"


function App() {

  const [companiesToDisplay, setCompaniesToDisplay] = useState(companies)
  const [technologiesToDisplay, setTechnologiesToDisplay] = useState(technologies)

  return (
    <>
      <div className="App">
      
      </div>
      <Routes>
        <Route path="/" element={<HomePage companiesToDisplay={companiesToDisplay} />} />
        <Route path="/company/:companySlug" element={<CompanyPage companiesToDisplay={companiesToDisplay} />} />
        <Route path="/tech/:slug" element={<TechnologyPage technologiesToDisplay={technologiesToDisplay} />} />
      </Routes>
    </>
  );
}

export default App;
