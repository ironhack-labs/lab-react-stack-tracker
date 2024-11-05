import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CompanyPage({companies}) {
  let {companySlug} = useParams();

  let company = companies.find(c => c.slug === companySlug);

  return (
    <div>
      <h3>Company Profile</h3>
      
      <div className="company-area">
        <div className="small-company main-title">
          <img src={company.logo} className="company-img"></img>
        </div>

        <div className="company-details">
          <h1>{company.name}</h1>
          <h4>About</h4>
          <p>{company.description}</p>
        </div>              
      </div>

      <div className="company-tech">
        {company.techStack.map(tech => {
          return(
            <div key={tech.id} className="tech-tile-area">
              <Link to={`/tech/${tech.slug}?companySlug=${company.slug}`}>
                <div className="tech-tile">
                  <img src={tech.image} alt="Technology icon" className="tech-icon"/>
                </div>
              </Link>
              <h4>{tech.name}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
