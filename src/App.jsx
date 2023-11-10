import "./App.css";
import companies from "./companies.json"
import technologies from "./technologies.json"
import { useState } from "react";



function App() {

  
const [companiesToDisplay, setCompaniesToDisplay] = useState(companies);
const [technologiesToDisplay, setTechnologiesToDisplay] = useState(technologies);

  return (
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>
    </div>
  );
}

export default App;
