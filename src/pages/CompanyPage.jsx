import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const company = companies.find((company) => {
    return company.id === companySlug;
  });
  return (
    <div className="company">
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1>{company.name}</h1>
      <p>{company.website}</p>
      <p>{company.description}</p>
      <img src={company.logo} />
      <div className="tech-containers">
        {company.techStack.map((techstack) => {
          return (
            <Link
              key={techstack.name}
              to={`/tech/${techstack.slug}?companySlug=${companySlug}`}
            >
              <p>{techstack.name}</p>
              <img src={techstack.image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

CompanyPage.propTypes = {
  companies: PropTypes.array.isRequired,
};
export default CompanyPage;
