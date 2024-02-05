import "./App.css";
import Companies from "./companies.json";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import Technologies from "./technologies.json";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [companies, setCompanies] = useState(Companies);
  const [technologies, setTechnologies] = useState(Technologies);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage companies={companies}></HomePage>}></Route>
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} technologies={technologies}></CompanyPage>}></Route>
        <Route path="/tech/:slug" element={<TechnologyPage technologies={technologies}></TechnologyPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
