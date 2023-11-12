import React from 'react';
import { useParams, Link } from 'react-router-dom';
import "./CompanyPage.css";


function CompanyPage({companies}) {

  const { companySlug } = useParams();
  const company = companies.find((company) => company.slug === companySlug);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="CompanyPage">
    <div className="CompanyInfoContainer">
      <img className="CompanyLogo" src={company.logo} alt={`${company.name} Logo`} />
      <div>
        <h2 className="CompanyName">{company.name}</h2>
        <p>Website: <a> {company.website} </a></p>
        <div className="CompanyDescriptionBox">
          <p>{company.description}</p>
        </div>
      </div>
    </div>

    <h2 className="TechStack">Tech Stack</h2>
    <ul className="TechStackList">
    {company.techStack.map(tech => (
          <li key={tech.slug}>
            <Link to={`/tech/${tech.slug}`}>
              <img className="TechLogo" src={tech.image} alt={`${tech.name} Logo`} />
              {tech.name}
            </Link>
          </li>
    ))}
    </ul>
  </div>
  );
}

export default CompanyPage;
