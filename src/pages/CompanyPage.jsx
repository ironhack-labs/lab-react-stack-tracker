import React from 'react'
import { useParams,} from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const foundCompany = companies.find(company => company.slug === companySlug);
  return (
    <div>
      <h1>Company Profile</h1>
      {foundCompany ?
      (<div>
          <h2>{foundCompany.name}</h2>
          <p><a href={foundCompany.website}>
            
          </a></p>
          <h3>About</h3>
          <p>{foundCompany.description}</p>
          
          <img src={foundCompany.logo}/>
          <h3>Tech Stack:</h3>
          <ul>
            {foundCompany.techStack.map(tech => (
              <li key={tech.slug}>{tech.name}</li>
            ))}
          </ul>
        </div>
      ) : "Company doesn't exist."}
    </div>
  );
}
export default CompanyPage;
