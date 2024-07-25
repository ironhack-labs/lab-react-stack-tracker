import { Route, Routes } from "react-router-dom";
import "./App.css";
import companies from "./companies.json"
import technologies from "./technologies.json"
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
        <Route path="/tech/:slug" element={<TechnologyPage technologies={technologies} />} />
      </Routes>
    </div>
  );
}

export default App;
