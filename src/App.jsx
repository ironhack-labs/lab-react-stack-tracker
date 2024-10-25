import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import companyList from './companies.json'
import technologyList from './technologies.json'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Companies from './pages/CompanyPage'
import Technologies from './pages/TechnologyPage'
function App () {
  const [companies, setCompanies] = useState(companyList)
  const [technologies, setTechnologies] = useState(technologyList)

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage companies={companies} />} />
        <Route
          path='/company/:slug'
          element={
            <Companies companies={companies} technologies={technologies} />
          }
        />
        <Route
          path='/tech/:slug'
          element={<Technologies technologies={technologies} />}
        />
      </Routes>
    </div>
  )
}

export default App
