import { Link } from "react-router-dom";

function HomePage(props) {
  //console.log(props)
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {props.allCompanies.map((eachCompany, index) => {
        return (
          <div className="list-companies" key={index}>
            <Link to={`/company/${eachCompany.slug}`}>
            <p>{eachCompany.name}</p>
            <p><img src={eachCompany.logo} alt="logo" width="100px"/></p>
            </Link>
          </div>
        )
      })}
      
    </div>
  );
}

export default HomePage;
