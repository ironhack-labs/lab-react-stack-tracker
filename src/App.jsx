import "./App.css";
import Companies from './companies.json'
import Technologies from './technologies.json'
import {useState} from 'react'


function App() {
  const [companies, setCompanies] = useState(Companies)
  const [technologies, setTechnologies] = useState(Technologies)

  return (
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>
    </div>
  );
}

export default App;
