import { Link } from "react-router-dom";

function HomePage(props) {
  const { companiesData } = props;
  console.log(companiesData);

  return (
    <div id="homepage-container">
      <h1 id="homepage-headline">
        StackTracker: Discover Tech Stacks Used by Top Companies
      </h1>
      <div id="company-logos">
        {companiesData.map((company) => {
          return (
            <Link
              id="company-card"
              key={company.id}
              to={`/company/${company.slug}`}
            >
              <h2 id="company-logo-name">{company.name}</h2>
              <img src={company.logo} width="100px" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
