import { useState } from "react";
import "./App.css";
import CompaniesData from "./companies.json"
import TechnologiesData from "./technologies.json"
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";


function App() {

  const [companies, setCompanies] = useState(CompaniesData);
  // console.log(companies);
  const [technologies, setTechnologies] = useState(TechnologiesData);
  // console.log(technologies);

  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <CompanyPage />
      <TechnologyPage />
    </div>
  );
}

export default App;
