import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="container">
        {props.companiesList.map((company, i) => {
          return (
            <div className="card">
              <Link key={i} to={`/company/${company.slug}`}>
                <p>{company.name}</p>
                <img src={company.logo} className="logo" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
