import { useState } from "react";

import companiesJSON from "./companies.json"
import technologiesJSON from "./technologies.json"

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Route, Routes } from "react-router";

function App() {
  const [companies, setCompanies] = useState(companiesJSON);
  const [technologies, setTechnologies] = useState(technologiesJSON);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />}></Route>
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />}></Route>
        <Route path="/tech/:slug" element={<TechnologyPage technologies={technologies} />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
