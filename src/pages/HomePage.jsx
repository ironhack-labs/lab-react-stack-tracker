import { NavLink } from "react-router-dom";

function HomePage(props) {

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className='companiesList'>
        {props.companiesList.map((company, i) => {
          return (
            <NavLink to={`/company/${company.slug}`} className="card">
              {company.name}
              <img src={company.logo} className="logo" />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
