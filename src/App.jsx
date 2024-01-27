import "./App.css";

import companiesJson from "./companies.json";
import technologiesJson from "./technologies.json";

import Navbar from "./components/Navbar";

import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";

import { Routes, Route } from "react-router-dom";

function App() {
  // console.log(technologiesJson);

  return (
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<HomePage companiesData={companiesJson}></HomePage>}
        ></Route>
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companiesData={companiesJson}></CompanyPage>}
        ></Route>
        <Route
          path="/tech/:slug"
          element={<TechnologyPage></TechnologyPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
