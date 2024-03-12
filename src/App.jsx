import "./App.css";
import companies from "./companies.json";
import technologies from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [company, setCompany] = useState(companies);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage company={company} />} />

        <Route
          path="/company/:companySlug"
          element={<CompanyPage company={company} />}
        />

        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
