import React from 'react';
import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const foundCompany = companies.find(company => company.slug === companySlug);

  if (!foundCompany) {
    return <div>Company not found.</div>;
  }

  return (
    <div>
      <h1>Company Profile</h1>
      <div>
        <h2>{foundCompany.name}</h2>
        <p>{foundCompany.description}</p>
        <img src={foundCompany.logo} alt={`${foundCompany.name} Logo`} />
        <h3>Tech Stack:</h3>
        <ul>
          {foundCompany.techStack.map(tech => (
            <li key={tech.slug} className = "tech-item">
              <Link to={`/tech/${tech.slug}?visitedCompanySlug=${companySlug}`}>
                <img src={tech.image} alt={`${tech.name} Logo`} />
                {tech.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CompanyPage;