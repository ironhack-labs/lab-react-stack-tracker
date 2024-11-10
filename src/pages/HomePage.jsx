import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage({companies}) {
  
  console.log("This is companies array: ", companies);
  
  return (
    <div className="container">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul className="list-container">
        {companies.map((company) => (
          <li key={company.id} className="list-item">
              <div>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                />
              </div>
            <Link className="link"  to={`/company/${company.slug}`}>
                <h3>{company.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
