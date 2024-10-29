import { Link, Route, Routes, useParams } from "react-router-dom";
import { useState } from "react";
import companiesJson from "./companies.json";
import techJson from "./technologies.json";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesJson);
  const [tech, setTech] = useState(techJson);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage techs={tech} companies={companies} />}
        />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
