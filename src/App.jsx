import { useState } from "react";
import companiesData from "./companies.json"
import technologiesData from "./technologies.json"
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";


function App() {
  const [companies, setCompanies] = useState(companiesData)
  const [technologies, setTechnologies] = useState(technologiesData)

  return (
    <div id="app">
      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage companies={companies}/>} />
        <Route path="/company/:companySlug" element={<CompanyPage/>}/>
        <Route path="/tech/:slug" element={<TechnologyPage/>} />

      </Routes>

    </div>
  );
}

export default App;