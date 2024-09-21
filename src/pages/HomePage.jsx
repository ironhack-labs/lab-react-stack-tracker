import { Link } from "react-router-dom";

function HomePage({ companiesData }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

      <ul>
        {companiesData.map(company => (
          <li key={company.id}>
            <Link to={`/company/${company.slug}`}>
              {company.name}
              <br />
              <img src={company.logo} style={{ width: "50px" }} />
            </Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default HomePage;
