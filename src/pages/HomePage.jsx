import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companies.map((company) => {
        return (
          <Link to={`/company/${company.slug}`} key={company.id}>
            <div>
              <img src={company.logo} alt="logo" />
              <p>{company.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
