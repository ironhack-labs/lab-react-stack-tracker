
import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div className="container d-flex flex-wrap justify-content-center">
      <h1 className="mb-5 mt-5">StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companies.map((company) => {
        return (
          <Link to={`/company/${company.slug}`} 
                key={company.id} 
                className="fw-semibold fs-5 text-center m-5 border-bottom border-start border-end"
                style={{width: '500px', textDecoration: 'none', color: 'black'}}>
            <div className="mb-5">{company.name}</div>
            <img className="mb-5" src={company.logo} style={{width: '150px'}}/>
          </Link>
        )
      })}
    </div>
  );
}

export default HomePage;
