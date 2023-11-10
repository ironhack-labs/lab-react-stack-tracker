import "./App.css";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import companies from "./companies.json"
import technologies from "./technologies.json"
import { useState } from "react";
import { Route, Routes} from 'react-router-dom';



function App() {

  
const [companiesToDisplay, setCompaniesToDisplay] = useState(companies);
const [technologiesToDisplay, setTechnologiesToDisplay] = useState(technologies);



  return (
    <div className="App">
      <nav className="nav-bar">Stack Tracker</nav>
    
      <Routes>
        <Route path="/" element={<HomePage companiesArr={companiesToDisplay} />} />
        <Route path="/company/:companySlug" element={<CompanyPage />} />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
      

    </div>
  );
}

export default App;
