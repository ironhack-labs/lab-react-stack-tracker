import { Link } from "react-router-dom";

function HomePage(props) {

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {props.companiesToDisplay.map(companyDetails => {
        return (
          <div key={companyDetails.id} className="companyDetails">
            <Link to={`/company/${companyDetails.name}`} className="name-link"> {companyDetails.name}</Link>
            <Link to={`/company/${companyDetails.name}`}><img src={companyDetails.logo} /></Link>
            <hr />
          </div>
        )
      })}
    </div>
  );
}

export default HomePage;
