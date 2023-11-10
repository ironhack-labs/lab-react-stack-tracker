import companies from "../companies.json"
import {Link} from "react-router-dom";
function HomePage(props) {
  return (
    <div>
      <h1>"StackTracker: Discover Tech Stacks Used by Top Companies"</h1>
      <ul>
        {props.companies.map((company) => (
          <li key={company.id}>
             <Link to={`/company/${company.slug}`}>
             {company.name}
              <img src={company.logo}/></Link>
          </li>

        ))}
      </ul>
      
    </div>
  );
}

export default HomePage;
