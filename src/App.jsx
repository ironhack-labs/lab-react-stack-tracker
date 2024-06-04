import {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import companiesData from "./companies.json";
import technologiesData from "./technologies.json";


function App() {

  const [companies, setCompanies] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {

    setCompanies(companiesData);
    setTechnologies(technologiesData);
  }, []);

  return (
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>
      <Switch>
        <Route exact path="/" render={() => <HomePage companies={companies} technologies={technologies} />} />
        <Route path="/company/:companySlug" component={CompanyPage} />
        <Route path="/tech/:slug" component={TechnologyPage} />
      </Switch>
    </div>
  );
}

export default App;
