import { NavLink } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

      {props.companiesArr.map((companyDetails) => {
        return (
          <NavLink to={`/company/${companyDetails.name}`}>
            <div>
              <span>{companyDetails.name}</span>
              <img src={companyDetails.logo} width="80" height="auto" />
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default HomePage;