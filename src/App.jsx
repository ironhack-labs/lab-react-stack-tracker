import "./App.css";
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import CompanyPage from './pages/CompanyPage'
import TechnologyPage from './pages/TechnologyPage'
import companyData from './companies.json'

function App() {
  return (
    <div className="App">
      <Navbar />
  <Routes>
  <Route path='/' element={<HomePage companies={companyData}/>} />
  <Route path='/company/:companySlug' element={<CompanyPage companies={companyData} />} />
  <Route path='/tech/:slug' element={<TechnologyPage />} />
  </Routes>
    </div>
  );
}

export default App;
