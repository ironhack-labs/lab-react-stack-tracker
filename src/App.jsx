import "./App.css";
import companiesData from "./companies.json"
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import techData from "./technologies.json"
import "./index.css"
import CompanyPage from "./pages/CompanyPage"
import TechnologyPage from "./pages/TechnologyPage"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/company/:companySlug" element={<CompanyPage/>}/>
        <Route path="/tech/:slug" element={<TechnologyPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
