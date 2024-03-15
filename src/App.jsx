import "./App.css";
import Companies from "./companies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Routes, Route } from "react-router-dom"
import { useState } from "react";


function App() {
  const [techBackUrl, setTechBackUrl] = useState("")
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companiesList={Companies}/>}/>
        <Route path="/company/:CompanySlug" element={<CompanyPage setTechBackUrl={setTechBackUrl}/>}/>
        <Route path="/tech/:TechSlug" element={<TechnologyPage techBackUrl={techBackUrl}/>}/>
      </Routes>
    </div>
  );
}

export default App;
