import { Link } from "react-router-dom";

function HomePage( { companies } ) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul className="company-ul">
        {companies.map(company => (
          <li className="company-li" key={company.id}>
            <Link to={`/company/${company.slug}`} >
              <h3>{company.name}</h3>
              <img src={company.logo} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
