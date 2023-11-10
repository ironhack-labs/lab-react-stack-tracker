import { useState } from "react";
import "./App.css";
import companies from "./companies.json";
import technologies from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companiesData, setCompaniesData] = useState(companies);
  const [technologiesData, setTechnologiesData] = useState(technologies);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
