import { Link } from "react-router-dom";

function HomePage({companies}) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companies.map(company => {
        return (
          <div key={company._id}>
            <Link to={`/company/${company.slug}`}>
            <img src={company.logo} alt={`${company.name} logo`} style={{ width: '50px' }} />
              {company.name}
            </Link>
          </div>

        )
      })}
    </div>
  );
}

export default HomePage;
