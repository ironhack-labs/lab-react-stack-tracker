import { Link } from "react-router-dom";


function HomePage(props) {
  const { companies } = props
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companies-container">
      {companies.map((oneCompany)=>{
        return(
          <Link to={`/company/${oneCompany.slug}`} key={oneCompany.id} className="company-link"><span>{oneCompany.name}</span>
          <div>
          <img src={oneCompany.logo} alt={oneCompany.name} height="80"/>
          </div>
      
      </Link>
        )
      })}
      </div>
      
    </div>
  );
}

export default HomePage;
