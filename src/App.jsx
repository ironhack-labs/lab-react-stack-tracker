import './App.css'
import { useState } from 'react'
import comp from '/src/companies.json'
import tech from '/src/technologies.json'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import TechnologyPage from './pages/TechnologyPage'
import Navbar from './components/Navbar'

function App() {
	const [companies, setCompanies] = useState(comp)
	const [technologies, setTechnologies] = useState(tech)
	return (
		<>
			<Navbar />
			<div className="App">
				<Routes>
					<Route path="/" element={<HomePage companies={companies} />} />
					<Route
						path="/company/:companySlug"
						element={<CompanyPage companies={companies} />}
					/>
					<Route
						path="/tech/:slug"
						element={<TechnologyPage technologies={technologies} />}
					/>
				</Routes>
			</div>
		</>
	)
}

export default App
