import "./App.css";
import { Route, Routes } from "react-router-dom";
import companies from "./companies.json";
import tech from "./technologies.json";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";

function App() {
  const [companiesList, setCompaniesList] = useState(companies);
  const [techList, setTechList] = useState(tech);
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company/:slug" element={<CompanyPage />} />
          <Route
            path="/technology/:technologyslug"
            element={<TechnologyPage />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
