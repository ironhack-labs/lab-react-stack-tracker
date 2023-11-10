import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul className="listCompanies">
        {props.companiesArr.map((companyObj) => {
          return (
            <>
              <hr />
              <div>
                <Link to={`/company/${companyObj.slug}`}>
                  <p>{companyObj.name} </p>
                  {<img className="companyLogo" src={companyObj.logo} />}
                </Link>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
