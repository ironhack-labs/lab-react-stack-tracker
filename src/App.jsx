import { Route, Routes } from "react-router-dom";
import "./App.css";
import companies from './companies.json';
import technologies from './technologies.json';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="App-main">
        <h1>LAB | React Stack Tracker</h1>
        <Routes>
          <Route path="/" element={<HomePage companies={companies}/>}></Route>
          <Route path="/company/:companySlug" element={<CompanyPage companies={companies}/>}></Route>
          <Route path="/tech/:slug" element={<TechnologyPage technologies={technologies}/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
