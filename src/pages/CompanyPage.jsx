import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";

function CompanyPage({ companies }) {

  const { companySlug } = useParams();


  const company = companies.find((company) => company.slug === companySlug);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      <h1>{company.name}</h1>
      <div>
        <img src={company.logo} alt={`${company.name} logo`} />
        <p>Website: {company.website}</p>
        <p>Description: {company.description}</p>
      </div>
      <div>
        <h2>Tech Stack</h2>
        <ul>
          {company.techStack.map((tech) => (
            <li key={tech.id}>
              <Link to={`/tech/${tech.slug}`}>
                <img src={tech.image} alt={`${tech.name} logo`} />
                {tech.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CompanyPage.propTypes = {
  companies: PropTypes.array.isRequired,
};

export default CompanyPage;
