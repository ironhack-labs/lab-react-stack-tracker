import "./App.css";
import companies from "./companies.json"
import techs from "./technologies.json"
import HomePage from './pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <h1>LAB | React Stack Tracker.</h1> */}
      <Routes>
        <Route path={"/"} element={ <HomePage comp = {companies}/> }/>
        <Route path={"/company/:companySlug"} element={ <CompanyPage comp = {companies}/>}/>
        <Route path={"/tech/:slug"} element={<TechnologyPage  tech={techs}/>}/>
      </Routes>
    </div>
  );
}

export default App;
