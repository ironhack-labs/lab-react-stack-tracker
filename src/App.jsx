import "./App.css";
import CompaniesData from "./companies.json"
import TechnologiesData from "./technologies.json"
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import CompanyPage from "./pages/CompanyPage";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path='/' element={<HomePage companies={CompaniesData} />} />
        <Route path='/company/:companySlug' element={<CompanyPage companies={CompaniesData}/>} />
        <Route path='/tech/:slug' element={<TechnologyPage />} />
    </Routes>
  </div>
);
}
export default App;