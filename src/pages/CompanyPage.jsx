import { Link, useParams } from "react-router-dom";
import "../index.css";

function CompanyPage(props) {
  const { companySlug } = useParams();

  const companyDetails = props.companiesArray.find((company) => {
    return company.slug == companySlug;
  });

  return (
    <div>
      <h1>Company Profile</h1>
      <div className="companyprofile-company">
      <p><strong>{companyDetails.name}</strong></p>
      <img src={companyDetails.logo} />
      <p>{companyDetails.website}</p>
      <p>{companyDetails.description}</p>
      </div>
      
      <div className="companyprofile-techs-grid">
      {companyDetails.techStack.map((tech) => {
        return (
          <div className="companyprofile-techs-card">
            <Link to={"/tech/" + tech.slug + "?companyslug=" + companySlug}>
            <p>{tech.name}</p>
            <img src={tech.image} />
          </Link>
          </div>
          
        );
      })}
      </div>
      
    </div>
  );
}

export default CompanyPage;
