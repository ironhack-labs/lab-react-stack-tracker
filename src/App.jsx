import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Routes, Route } from "react-router-dom";
import companies from "./companies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <h1>LAB | React Stack Tracker</h1>
        <Routes>
          <Route path="/" element={<HomePage companies={companies} />} />
          <Route path="/company/:slug" element={<CompanyPage />} />
          <Route path="/technology/:slug" element={<TechnologyPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
