import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CompanyPage.css";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const company = companies.find((company) => company.slug === companySlug);

  return (
    <div>
      <h1 className="h1-title">Company Profile</h1>
      <div className="detail-container">
        <div className="image-logo">
        <img src={company.logo} alt={`Img of the ${company.name}`} />
        </div>
        <div className="details-info">
          <h1>{company.name}</h1>
          <h3>About</h3>
          <p>{company.description}</p>
        </div>
      </div>
      <div>
        <ul className="details-techs">
          {company.techStack.map((tech) => (
            <li key={tech.slug}>
              <Link to={`/tech/${tech.slug}`} className="links">
              <div className="tech-logos">
                <img
                  src={tech.image}
                  alt={tech.name}
                />
                </div>
                <p>{tech.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CompanyPage;
