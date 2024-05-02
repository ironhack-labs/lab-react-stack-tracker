import { Link } from "react-router-dom";

function HomePage({ companies }) {

  return (
    <div className="homepage">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="company-list">
        {companies.map(company =>
          <Link to={`/company/${company.id}`} className="company-card" key={company.id}>
            <h2>{company.name}</h2>
            <img src={company.logo} alt={company.name} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default HomePage;
