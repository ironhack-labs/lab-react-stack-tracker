import "./App.css";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import CompanyPage from "./pages/CompanyPage";
import companyData from "./companies.json";
import technologyData from "./technologies.json"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage companies={companyData}/>}/>
        <Route path="/company/:companySlug" element={<CompanyPage companies={companyData} technologies={technologyData}/>}/>
        <Route path="/tech/:slug" element={<TechnologyPage technology={technologyData}/>}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
