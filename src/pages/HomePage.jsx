import { Link } from "react-router";

function HomePage({ companies }) {
  if (!companies) {
    return <p>There is no companies</p>
  }
  
  return (
    <div className="homepage-container main-container">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companies-list">
        {companies.map(company => { 
          return (
            <Link key={company.id} to={`/company/${company.slug}`} className="company-info-container">
              <h3>{company.name}</h3>
              <img src={company.logo} alt="Company logo" />            
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
