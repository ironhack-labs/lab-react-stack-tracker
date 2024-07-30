import { useState } from "react";
import "./App.css";
import Companies from './companies.json'
import Technologies from './technologies.json'
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";
import { Routes , Route} from "react-router-dom";

function App() {

  const [companies, setCompanies] = useState(Companies)
  const [technologies, setTechnologies] = useState(Technologies)


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage companies={companies}/>}/>
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} tech={technologies}/>}/>
        <Route path="/tech/:slug" element={<TechnologyPage tech={technologies}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
