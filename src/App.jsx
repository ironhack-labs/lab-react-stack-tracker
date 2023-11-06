import { useState } from "react"
import "./App.css"
import Companies from "./companies.json"
import Technologies from "./technologies.json"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import CompanyPage from "./pages/CompanyPage"
import TechnologyPage from "./pages/TechnologyPage"
import { Route, Routes } from "react-router-dom"

function App(){
const [companies, setCompanies] = useState(Companies)
const [technologies, setTechnologies] = useState(Technologies)

console.log(companies); // Log the companies data here
return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage companies={companies} />} />
            <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
            <Route path="/tech/:slug" element={<TechnologyPage technologies={technologies} />} />
        </Routes>
    </div>
)
}

export default App;
