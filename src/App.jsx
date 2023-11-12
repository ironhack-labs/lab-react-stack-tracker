import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import companies from "./companies.json"
import technologies from "./technologies.json"
import CompanyPage from "./pages/CompanyPage"
import TechnologyPage from "./pages/TechnologyPage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar";

function App() {

  const [companiesToDisplay, setCompaniesToDisplay] = useState(companies);
  const [technologiesToDisplay, setTechnologiesToDisplay] = useState(technologies);

  const loadCompanies = () => {
    return companiesToDisplay.map((company) => (
      <div className="board">
      <li className="companyBox" key={company.slug}>
        <Link to={`/company/${company.slug}`}>
          <img className="companyLogo" src={company.logo} alt={company.name} />
          <p>{company.name}</p>
        </Link>
      </li>
    </div>))
  }

  const loadTechnologies = (technologies) => {
    return technologies.map((technology) => (
      <li key={technology.slug}>
        <Link to={`/tech/${technology.slug}`}>
          <img className="techStackLogo" src={technology.image} alt={`${technology.name}'s logo`}></img>
          <p>{technology.name}</p>
        </Link>
      </li>
    ))
  }

  const getCompany = (companySlug) => {
    return companiesToDisplay.find((company) => {
      return company.slug === companySlug;
    })
  };

  const getTechnology = (technologySlug) => {
    return technologiesToDisplay.find((technology) => {
      return technology.slug === technologySlug;
    })
  }

  return (
    <div className="App">
    
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<HomePage loadCompanies={loadCompanies} />} />
        <Route path='/company/:companySlug' element={<CompanyPage getCompany={getCompany} loadTechnologies={loadTechnologies} />} />
        <Route path='/tech/:technologySlug' element={<TechnologyPage getTechnology={getTechnology} />} />
      </Routes>

    </div>
  );
}



export default App;
