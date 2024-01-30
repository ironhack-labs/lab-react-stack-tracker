import * as React from "react";
import { Link, useParams } from "react-router-dom";



function CompanyPage(props) {

    console.log(props);

  const {companySlug} = useParams();

  console.log(props.companies)
  console.log(companySlug);

  const foundCompany = props.companies.find((e)=> e.slug === companySlug)

  
console.log(foundCompany)

return(
<div>
  <h2>Company profile</h2>

  {!foundCompany && <h4>Not found</h4>}
  {foundCompany && (
    <div>
    <img src={foundCompany.logo} alt={foundCompany.name + " logo"} width="10%"></img>
    <h3>{foundCompany.name}</h3>
    <p>{foundCompany.description}</p>
    <h4>{foundCompany.website}</h4>
    </div>
  )}

 </div>
)
}

export default CompanyPage;
