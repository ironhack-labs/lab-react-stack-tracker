import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams()
  const company = props.getCompany(companySlug)
  return (
    <div>
      <div>
        <h1>Company Profile</h1>
        <h2>{company.name}</h2>
        <a href={`https://${company.website}`}>
          Click to visit website
        </a>
        <img className="profileLogo" src={company.logo} alt={`${company.name}'s image`}></img>
        <p>About</p>
        <h3>{company.description}</h3>
      </div>

      <section>
      <ul>{props.loadTechnologies(company.techStack)}</ul>
      </section>
    </div>
  );
}

export default CompanyPage;
