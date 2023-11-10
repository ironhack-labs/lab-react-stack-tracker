import { Link } from "react-router-dom";

function HomePage(props) {
let { companies } = props;
  return (
    <div>
      <h1>HomePage</h1>
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>
      <div>{companies.map((company) => {
        return (
          <div key={company.id}>
            <h3>{company.name}</h3>
            <h3>
              <Link to={'/company/${company.slug}'}>
                <img src={company.logo}/>
              </Link>
            </h3>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default HomePage;
