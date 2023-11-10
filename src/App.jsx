import { useState } from "react";
import "./App.css";
import companies from "./companies.json";
import technologies from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [companiesDetails, setCompaniesDetails] = useState(companies);
  const [techDetails, setTechDetails] = useState(technologies);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage companiesArr={companiesDetails}/>} />
        <Route path="/company/:companySlug" element={<CompanyPage companiesArr={companiesDetails}/>} />
        <Route path="/tech/:slug" element={<TechnologyPage techStack={techDetails.techStack}/>} />
      </Routes>
    </div>
  );
}

export default App;
