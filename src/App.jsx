import "./App.sass";
import { useState } from 'react';
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import TechnologyPage from './pages/TechnologyPage'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import companiesData from "/src/assets/data/companies.json"
import techData from "/src/assets/data/technologies.json"

function App() {
  const [companies] = useState(companiesData)
  const [technologies] = useState(techData)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<HomePage companies={companies} technologies={technologies}/>}
        />
        <Route 
          path="/company/:companySlug" 
          element={<CompanyPage companies={companies} technologies={technologies}/>}
        />
        <Route 
          path="/technology/:techSlug" 
          element={<TechnologyPage companies={companies} technologies={technologies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
