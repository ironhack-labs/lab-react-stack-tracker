import { Link } from "react-router-dom";

function HomePage(props) {

  const { companies = [] } = props;

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul className="companies-list">
        {companies.map((company) => {
          return (
            <Link key={company.id} to={`/company/${company.slug}`}>
              <li className="list-item">
                <p>{company.name}</p>
                <img src={company.logo} alt="" className="company-logo" />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;