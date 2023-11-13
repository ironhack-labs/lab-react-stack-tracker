import { Link } from "react-router-dom";
import "./HomePage.css"

function HomePage(props) {
  
  console.log(props.companies[0])

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div id="flex-companies">
      {props.companies.map((company) => {
        
        return(
          <Link to={`/company/${company.slug}`}
          key={company.id}
          className="company-item-container"
          >
          
          <div >
            <p>{company.name}</p>
            <img src={company.logo} alt={`${company.name} logo`} className="company-logo"/>
          </div>
          
          </Link>
      )})}
      </div>

    </div>
  );
}

export default HomePage;