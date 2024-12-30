import { Routes, Route } from "react-router-dom"; // <== IMPORT
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/tech" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
