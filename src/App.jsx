import "./App.css";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import companies from "./companies.json";
import technologies from "./technologies.json";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const [companiesToDisplay, setCompaniesToDisplay] = useState(companies);
  const [technologiesToDisplay, setTechnologiesToDisplay] =
    useState(technologies);

  return (
    <div className="App">
      <Link to="/"> <nav className="nav-bar">Stack Tracker</nav></Link>
     

      <Routes>
        <Route
          path="/"
          element={<HomePage companiesArr={companiesToDisplay} />}
        />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companiesArr={companiesToDisplay} />}
        />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
