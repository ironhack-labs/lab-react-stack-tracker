import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const company = companies.find((company) => company.name === companySlug);
  return (

    <div>
      <h1 style={{ textAlign: "center" }}> company Profile</h1>
      <div className="company-profile">
        <img className="company-img" src={company.logo} alt="logo" />
        <div className="company-info">
          <div className="name">{company.name}</div>
          <div style={{ textAlign: "center" }} className="description">{company.description}</div>
        </div>

      </div>
      <h2>Tech Stack</h2>
      <div className="tech-stack">
        {company.techStack.map((techStack, index) => (
          <div key={index}>
            <Link to={`/tech/${techStack.slug}`}>
              <div className="techStack-img-container">
                <img className="techStack-img" src={techStack.image} alt={techStack.name} />
              </div>
              <h3 style={{ textDecoration: "none", color: "black" }}>{techStack.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

CompanyPage.propTypes = {
  companies: PropTypes.array.isRequired
};

export default CompanyPage;