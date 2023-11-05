/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "/src/App.css";

function HomePage(props) {
  let {companies} = props;
  return (
    <div id="home-page">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul id="list-companies">
        {companies.map(company=>{
          return(
            <div id="company-style" key={company.id}>
              <li> 
                <Link id="info-company" to={`/company/${company.slug}`}>
                  {company.name} 
                  <img id="logo" src={company.logo}/>
                </Link>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default HomePage;
