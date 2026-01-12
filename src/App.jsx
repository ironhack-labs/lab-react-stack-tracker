
import companies from './companies.json'
import technologies from './technologies.json'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';
import "./App.css";
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<HomePage companies={companies}/>}></Route>
        <Route path='/company/:companySlug' element={<CompanyPage companies={companies} />}></Route>
        <Route path='/tech/:slug' element={<TechnologyPage technologies={technologies} />}></Route>
      </Routes>
    </div>
  );
}

export default App;