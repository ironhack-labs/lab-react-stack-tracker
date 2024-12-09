import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companies.map((company) => (
        <Link key={company.id} to={`/company/${company.slug}`}>
          {company.name}
          <img
            src={company.logo}
            alt={company.name}
            style={{ maxWidth: "100px" }}
          />
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
