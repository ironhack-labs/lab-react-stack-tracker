import CompanyPage from "./CompanyPage";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="CompanyBlock">
      {props.companies.map((company)=> {
        return (
          <div key={company.id}>
            <h3>{company.name}</h3>
            <Link to={`/company/${company.slug}`}><img id="logoImg" src={company.logo}></img></Link>
          </div>
        );
      })}
      </div>

    </div>
  );
}

export default HomePage;



