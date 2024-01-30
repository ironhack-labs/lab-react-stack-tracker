import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {props.companies.map((company) => {
        return (
          <div key={company.id} className="Company-List">
            <Link to={`company?companyId=${company.slug}`}>
              <h3 className="companyname">{company.name}</h3>
              <img src={company.logo} alt="company-logo" className="homepage-companyimage"></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
