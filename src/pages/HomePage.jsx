import { Link } from "react-router-dom"
import companiesData from "./../companies.json"
import "./HomePage.css"
import CompanyPage from "./CompanyPage";

function HomePage() {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {companiesData.map((company) => (
          <li key={company.id} className="companiesName-img">
            <div className="companyname">
          <Link to={`/company/${company.slug}`}>
            <div>{company.name}</div>
            <div><img src={company.logo} alt="logo-img" className="logo-img"/></div>
            </Link>
          </div>
            </li>
          ))}

      </ul>
    </div>
  );
}

export default HomePage;
