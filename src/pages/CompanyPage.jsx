
import React from "react";
import { useParams, Link } from "react-router-dom";

const CompanyPage = ({ companies }) => {
  const { companySlug } = useParams();
  const company = companies.find((c) => c.slug === companySlug);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      <h1>Company Profile: {company.companyName}</h1>
      <img src={company.logo} alt={company.companyName} className="icon" />
      <p>{company.website}</p>
      <ul>
        {company.techStack.map((tech) => (
          <li key={tech.slug}>
            <Link to={`/tech/${tech.slug}`}>
              <img src={tech.image} alt={tech.name} className="icon" />
              <p>{tech.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyPage;
