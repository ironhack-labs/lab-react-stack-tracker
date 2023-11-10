import { Link } from "react-router-dom";

function HomePage(props) {
  console.log(props.companiesList);
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {props.companiesList.map((company, i) => {
          return (
            <Link key={i} to={`/company/${company.slug}`} className="card">
              {company.name}
              <img src={company.logo} className="logo" />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
