import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="home-page-list">
        {props.companies.map((company) => {
          return (
            <Link
              key={company.id}
              to={"company/" + company.slug}
              className="home-page-link"
            >
              {company.name}
              <img
                src={company.logo}
                alt={company.name}
                className="company-image"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
