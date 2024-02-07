import { Link } from "react-router-dom";
import "../index.css";


function HomePage({companies}) {
  return (
      <div className="HomePage">
        <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
        <ul className="linkContainer">
          {companies.map((company) => (
              <li key={company.slug} className="companyContainer">
                <Link to={`/company/${company.slug}`} className="linkSlug">
                   {company.name}  
                  <img src={company.logo} />
                </Link>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default HomePage;
