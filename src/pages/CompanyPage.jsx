import { useParams } from "react-router-dom";


function CompanyPage() {
const { companySlug } = useParams();
const company = companies.find(company => company.slug === companySlug);

  return (
    <div>
      <h1>{company.name}</h1>
      <p>Website: {company.website}</p>
      <p>Description: {company.description}</p>
      <img src={company.logo} alt={company.name} />
    </div>
  );
}

export default CompanyPage;


