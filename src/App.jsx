import { useState } from "react";
import "./App.css";
import CompaniesData from "./companies.json"
import TechnologiesData from "./technologies.json"


function App() {

  const [companies, setCompanies] = useState(CompaniesData);
  // console.log(companies);
  const [technologies, setTechnologies] = useState(TechnologiesData);
  // console.log(technologies);

  return (
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>
    </div>
  );
}

export default App;
