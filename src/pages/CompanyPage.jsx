import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const company = companies.find((company) => company.slug === companySlug);

  if (!company) {
    return <div>No company</div>;
  }

  // Render company information
  return (
    <div>
      <h2>{company.name}</h2>
      <img src={company.logo} alt="Company Logo" />
      <p>About:</p>
      <p>{company.description}</p>
      <h3>Tech Stack</h3>
      {company.techStack.map((tech) => {
        return (
          <div key={tech.name}>
            <Link to={`/tech/${tech.slug}`}>
              <img src={tech.image} alt={tech.name} />
              <p>{tech.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CompanyPage;
