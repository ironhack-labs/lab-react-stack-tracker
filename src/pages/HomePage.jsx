import { Link } from "react-router-dom";

function HomePage({companies}) {
  return (
    <>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companies">
        {companies.map(company =>{        
          return(
            <Link to={`/company/${company.slug}`} key={company.id}>
              <div className="company main-title">
                <h3>{company.name}</h3>
                <img src={company.logo} className="img-tile"></img>
              </div>
            </Link>
          )})
        }
      </div>
    </>
  );
}

export default HomePage;
