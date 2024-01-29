/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
function HomePage(props) {
  return (
    <div>
      <h1 className="homepage-title">
        StackTracker: Discover Tech Stacks Used by Top Companies
      </h1>

      <div className="company-list">
        {props.companies.map((eachCompany) => {
          return (
            <div key={eachCompany.id} className="company-item">
              <Link to={`/company/${eachCompany.id}`}>
                <p className="company-name">{eachCompany.name}</p>
                <img className="company-logo" src={eachCompany.logo}></img>
                <div className="bar"></div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
