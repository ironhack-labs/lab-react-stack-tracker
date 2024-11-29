import { useState } from "react";
import "./App.css";
import companiesData  from "./companies.json";
import technologiesData  from "./technologies.json";


function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);

  return (
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>
    </div>
  );
}

export default App;
