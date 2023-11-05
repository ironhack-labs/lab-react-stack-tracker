import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h4>StackTracker: Discover Tech Stacks Used by Top Companies</h4>
        {props.companies.map((company)=>{
          return( 
                <div key={company.id} className="companies">
                   <div className="companies-list">
                      {props.companies.map((company) =>{
                         return(
                          <div className="companies-card">
                            <h4>{company.name}</h4>
                            <Link to={`/company/${company.name}`}> 
                              <img src={company.logo} className="logo card"></img>
                            </Link>
                          </div>
                          )})}
                    </div>
              </div> )
          })}
    </div>
  );
}

export default HomePage;
