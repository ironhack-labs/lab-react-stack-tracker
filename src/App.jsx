import "./App.css";
import {Routes, Route} from 'react-router-dom'
import companiesJSON from './companies.json'
import technologiesJSON from './technologies.json'
import Navbar from './components/Navbar'
import Homepage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import TechnologyPage from './pages/TechnologyPage'
import { useState } from "react";

function App() {

  const [companies, setCompanies] = useState(companiesJSON)
  const [technologies, setTechnologies] = useState(technologiesJSON)

  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path='' element={<Homepage companies={companies}></Homepage>}></Route>
      <Route path='/company/:companySlug' element={<CompanyPage companies={companies}></CompanyPage>}></Route>
      <Route path='/tech/:slug' element={<TechnologyPage technologies={technologies}></TechnologyPage>}></Route>
    </Routes>
    </div>
  );
}

export default App;
