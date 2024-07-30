
import "./App.css";
import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import companies from './companies.json'
import technologies from './technologies.json'
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {

  const [company,setCompany] = useState(companies)
  const [technology, setTechnology] = useState(technologies)

  return (
    <>
    <header className="header">
    <h3>StackTracker</h3>
    </header>
  <Navbar></Navbar>

  <Routes>
  <Route path="/" element ={<HomePage companies={company}/>}/>
  <Route path="/company/:slug" element={<CompanyPage companies={company} />} />
  <Route path="/technology/:slug" element={<TechnologyPage />} />
  </Routes>

  </>
  );
}

export default App;
