import { Link } from "react-router-dom";
import "../index.css";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div id="homepage-company-grid">
        {props.companiesArray.map((company) => {
          return (
            <div className="homepage-company-card">
              <Link to={`/company/${company.slug}`}>
                <p>{company.name}</p>
                <img src={company.logo} alt="Logo of the company" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
