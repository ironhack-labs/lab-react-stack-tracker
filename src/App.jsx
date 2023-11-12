import "./App.css";
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import TechnologyPage from './pages/TechnologyPage'
import { Route, Routes } from "react-router-dom";
import companies from './companies.json'
import technologies from './technologies.json'
import { useState } from "react";

function App() {

  const [companyList, setCompanyList] = useState(companies)
  const [technologyList, setTechnologyList] = useState(technologies)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage listOfCompanies ={companyList}/>} />
      <Route path="/company/:companySlug" element={<CompanyPage/>}/>
      <Route path="/tech/:slug" element={<TechnologyPage/>}/>
    </Routes>
      </>

  );
}

export default App;
