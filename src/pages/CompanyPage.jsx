import React from "react";
import {useParams} from "react-router-dom";
import TechnologyPage from "./TechnologyPage";


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
          <TechnologyPage foundCompany={foundCompany}></TechnologyPage>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyPage;
