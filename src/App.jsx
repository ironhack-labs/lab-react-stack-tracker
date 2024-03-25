import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Companies from "./pages/CompanyPage";
import Technologies from "./pages/TechnologyPage";

function App() {
 

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company/:companySlug" element={<Companies />} />
        <Route path="/tech" element={<Technologies />} />
         
        </Routes>
      </div>
  );
}

export default App;
