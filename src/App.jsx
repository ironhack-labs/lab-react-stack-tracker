import "./App.css";
import companiesData from "./companies.json"
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import technologiesData from "./technologies.json"

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      {/* {console.log(companiesData)} */}
      <Navbar />
      <Routes>

        <Route path={"/"} element={<HomePage 
          companiesData={companiesData}
        />} />
        <Route path={"/company/:companySlug"} element={<CompanyPage 
        companiesData={companiesData}
        technologiesData={technologiesData}
        />} />
        <Route path={"/tech/:slug"} element={<TechnologyPage 
        companiesData={companiesData}
        technologiesData={technologiesData}
        />} />




      </Routes>
    </div>
  );
}

export default App;
