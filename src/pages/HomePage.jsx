import { Link } from "react-router-dom";

function HomePage(props) {
  const {companies} = props

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="Company-List">
        {companies.map((company) => {
          return (
            <div key={company.id}>
              <Link to={`company/${company.slug}`}>
                <h3 className="companyname">{company.name}</h3>
                <img src={company.logo} alt="company-logo" className="homepage-companyimage"></img>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
