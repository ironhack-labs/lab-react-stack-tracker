import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div className="list">
      <h3>StackTracker: Discover Tech Stacks Used by Top Companies</h3>
      <ul>
        {companies.map((eachCompany, index) => {
          return (
            <li className="card" key={index}>
              <Link to={`/company/${eachCompany.slug}`}>
                <div>
                  <p>{eachCompany.name}</p>
                  <img className="logo" src={eachCompany.logo} alt="logo"/>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
