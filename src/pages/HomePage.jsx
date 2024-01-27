import { Link } from "react-router-dom";

function HomePage(props) {
  const { companiesData } = props;
  console.log(companiesData);

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companiesData.map((company) => {
        return (
          <Link key={company.id} to={`/company/${company.slug}`}>
            <h2>{company.name}</h2>
            <img src={company.logo} width="100px" />
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
