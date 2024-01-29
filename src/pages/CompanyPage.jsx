import React from "react";
import {useParams} from "react-router-dom";
import TechnologyPage from "./TechnologyPage";
import {v4 as randomId} from 'uuid'
import {Link} from 'react-router-dom'


function CompanyPage(props) {
  const { companySlug } = useParams();

  let foundCompany = props.companies.find((company) => {
    return company.slug === companySlug;
  });

  return (
    <div>
      <h2>Company Profile</h2>
      <div>
        {!foundCompany && <h3>No matching company</h3>}
        {foundCompany && (
          <div>
            <h3>{foundCompany.name}</h3>
            <p>{foundCompany.website}</p>
            <p>{foundCompany.description}</p>
            <img src={foundCompany.logo} alt='logo from found company' width="250"></img>        
            {foundCompany.techStack.map((oneTechStack)=> {
        return (
          <div key={randomId()}>
          <Link to={`tech/${oneTechStack.slug}`}>
            <h4>{oneTechStack.name}</h4>
            <img src={oneTechStack.image} alt='TechStack image' width="150" ></img>
          </Link>
          </div>
        )
      })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyPage;

//<TechnologyPage foundCompany={foundCompany} technologies={props.technologies}></TechnologyPage>