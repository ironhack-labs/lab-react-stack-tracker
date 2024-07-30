import { Link } from "react-router-dom";
import '../App.css'

function HomePage({companies}) {
  return (
    <div>

      <h3>StackTracker: Discover Tech Stacks Used by Top Companies</h3>

      <div className="companies-container">
        {companies.map(company => (
          <div key={company.slug} className="company-item">
          <div className="company-name">{company.name}</div>
            <Link to={`/company/${company.slug}`}>
              <img src={company.logo} alt={company.name} />
              
            </Link>
            </div>   
         ))}
      
      </div>

    </div>
  );
}

export default HomePage;
