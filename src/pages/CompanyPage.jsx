import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const company = companies.find((company) => company.slug === companySlug);

  return (
    <div>
      <h1>Company Profile</h1>
      <div className="detail-container">
        <img src={company.logo} width="50" alt={`Img of the ${company.name}`} />
        <div className="details-info">
          <h1>{company.name}</h1>
          <h3>About</h3>
          <p>{company.description}</p>
        </div>
        <div  className="details-techs">
          <ul>
            {company.techStack.map((tech) => (
              <li key={tech.slug}>
                <Link to={`/tech/${tech.slug}`}>
                  <img
                    src={tech.image}
                    alt={tech.name}
                    style={{ width: 30, height: 30, marginRight: 10 }}
                  />
                  {tech.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;
