import "./App.css";
import technologiesData from './technologies.json'
import companiesData from './companies.json'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { useState } from "react";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Route, Routes } from 'react-router-dom';

function App() {

  const [techData, setTechData] = useState(technologiesData)
  const [compData, setCompData] = useState(companiesData)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<HomePage companies={compData} />} />
        <Route path={'/company/:companySlug'} element={<CompanyPage />} />
        <Route path={'/tech/:slug'} element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
