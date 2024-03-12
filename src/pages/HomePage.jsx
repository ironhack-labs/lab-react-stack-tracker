import { Link } from "react-router-dom";

function HomePage({ company }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="card-container">
        {company.map((company) => (
          <Link to={`/company/${company.slug}`} className="company-card" key={company.id}>
            {company.name}
            <img src={company.logo} alt={company.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
