import { Link } from "react-router-dom";

function HomePage(props) {
 
 //console.log(props.companies); --------> returns undefined???
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

      <ul>
        {props.companies &&
          props.companies.map((company) => (
            <li key={company.id}>
              <Link to={`/company/${company.slug}`}>
                <img src={company.logo} alt={company.companyName} />
                {company.companyName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomePage;
