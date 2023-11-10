import "./App.css";
import companiesJson from "./companies.json"
import Navbar from "./components/Navbar";
import technologiesJson from "./technologies.json"
import {useState} from "react"


function App() {
  
  const [companiesArr, setCompaniesArr] = useState(companiesJson)
  const [technologiesArr, setTechnologiesArr] = useState(technologiesJson)
  
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
