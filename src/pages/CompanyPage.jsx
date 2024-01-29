import * as React from "react";
import {useParams} from "react-router-dom";


function CompanyPage(props) {

  const {companyID}= useParams();
  console.log(companyID)

  let foundCompany = props.companies.find((company) => {
    return company.id === companyID
  })
  

return(
<div>
  <h2>Company profile</h2>
  {!foundCompany && <h4>Not found</h4>}
  {foundCompany && (
    <div>
    <img src={foundCompany.logo} alt={foundCompany.name + " logo"}></img>
    <h3>{foundCompany.name}</h3>
    <p>{foundCompany.description}</p>
    </div>
  )}

</div>
)
}

export default CompanyPage;
