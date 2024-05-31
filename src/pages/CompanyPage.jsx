import {  useParams } from "react-router-dom";

function CompanyPage(companies) {

  const {companySlug} = useParams()
  const foundCompSlug = companies.find(company => company.slug === companySlug )

  return (
    <div>
      <h1>Company Profile</h1>
    </div>
  );
}

export default CompanyPage;
