import "./App.css";
import technologies from "./technologies.json"
import companies from "./companies.json"
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  return (
    <div className="App">

      <section id ="pages">
        <Routes>
          <Route path={"/"} element={<HomePage data={companies}/>} />
          <Route path={"/company/:companySlug"} element={<CompanyPage data={companies}/>} />
          <Route path={"/tech/:slug"} element={<TechnologyPage data={technologies}/>}/>

        </Routes>
      </section>
    </div>
  );
}

export default App;
