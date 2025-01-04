import { Link } from "react-router-dom";

function HomePage({companies}) {
  console.log(companies)
  
  return (
    <div className="homepage-container">
      <h3>StackTracker: Descubra las pilas tecnológicas utilizadas por las principales empresas</h3>
      <div className="companies-list">
      {companies.map((eachCompany) => {
        return(
        <Link to={`/company/${eachCompany.slug}`} key={eachCompany.id} className="company-card">
        <div>
        <h3>{eachCompany.name}</h3>
        <img src={eachCompany.logo} alt={eachCompany.slug} />
        </div>
        </Link>)
      })}
      </div>
    </div>
  );
}

export default HomePage;
