import { NavLink } from "react-router-dom";

function HomePage({company}) {
  
  return (
    
    <div className="homepage">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {
        company.map((company)=>{
          return (
            <NavLink to = {`/company/${company.slug}`} key={company.id}>
            <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h2 className="card-title">{company.name}</h2>
            </div>
              <img className="card-img-top" src={company.logo} alt="Card image cap" />
            </div>
            </NavLink>
          );
        })
      }
    </div>
  );
}

export default HomePage;
