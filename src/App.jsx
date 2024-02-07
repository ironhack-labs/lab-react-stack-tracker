import "./App.css";
import companies from '/src/companies.json';
import technologies from '/src/companies.json';

import Navbar from '/src/components/Navbar';

import HomePage from '/src/pages/HomePage';
import CompanyPage from '/src/pages/CompanyPage';
import TechnologyPage from '/src/pages/TechnologyPage';

import {Routes, Route} from 'react-router-dom';

function App() {

  return (

    <div className="App">

      <Navbar />

      <h1>LAB | React Stack Tracker</h1>

        <Routes>
          <Route path="/" element={<HomePage companies={companies}/>} />
          <Route path="/company/:companySlug" element={<CompanyPage companies={companies}/>} />
          <Route path="/tech/:slug" element={<TechnologyPage />} />
        </Routes>

    </div>

  );
}

export default App;
