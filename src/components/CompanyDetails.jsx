/* eslint-disable react/prop-types */
import { Link } from "react-router";

function CompanyDetails({ company }) {
  return (
    <div className="company-details">
      <div className="company-info">
        <img className="logo" src={company.logo} alt="Company logo" />
        <h2>{company.name}</h2>
        <h5>About</h5>
        <p>{company.description}</p>
      </div>

      <div className="company-stack-container">
        {company.techStack.map((stack) => (
          <div key={stack.slug} className="company-stack">
            <Link to={`/tech/${stack.slug}`}>
              <img className="logo" src={stack.image} alt="Stack image" />
              <p>{stack.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyDetails;
