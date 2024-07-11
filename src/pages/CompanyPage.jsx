import companies from "../companies.json";
import { useParams, Link } from "react-router-dom";

function CompanyPage() {
  const { slug } = useParams();
  const company = companies.find((company) => company.slug == slug);
  return (
    <div className="companyPage">
      <h1 className="companyPage__name">{company.name}</h1>
      <img
        className="companyPage__logo"
        src={company.logo}
        alt={company.name}
      />
      <p className="companyPage__website">{company.website}</p>
      <p className="companyPage__description">{company.description}</p>
      <ul className="companyPage__techStack">
        {company.techStack.map((tech) => (
          <Link
            to={`/technology/${tech.slug}?company=${company.slug}`}
            key={tech.id}
            className="techStack__tech"
          >
            <h2 className="techStack__tech-name">{tech.name}</h2>
            <img
              className="techStack__tech-logo"
              src={tech.image}
              alt={tech.name}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
