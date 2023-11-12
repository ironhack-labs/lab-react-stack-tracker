import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <div>
        <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      </div>
      <div className="company-list">
        {props.companiesArr.map((company) => {
          return (
            <Link to={`/company/${company.slug}`}>
              <div key={company.id} className="company-card">
                <h2 className="company-name">{company.name}</h2>
                <img className="logo" src={company.logo} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default HomePage
