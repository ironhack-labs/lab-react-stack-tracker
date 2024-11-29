import { useState } from "react";
import "./App.css";
import companiesData  from "./companies.json";
import technologiesData  from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";


function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);

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
