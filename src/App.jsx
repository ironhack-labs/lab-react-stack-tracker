/* eslint-disable no-unused-vars */
import "./App.css";
import companiesJson from "./companies.json";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import technologiesJson from "./technologies.json";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [companies, setCompanies] = useState(companiesJson);
  const [technologies, setTechnologies] = useState(technologiesJson);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              companies={companies}
              setCompanies={setCompanies}
            ></HomePage>
          }
        ></Route>

        <Route
          path="/company/:companySlug"
          element={
            <CompanyPage
              companies={companies}
              setCompanies={setCompanies}
            ></CompanyPage>
          }
        ></Route>
        <Route
          path="/tech/:slug"
          element={
            <TechnologyPage
              technologies={technologies}
              setTechnologies={setTechnologies}
            ></TechnologyPage>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
