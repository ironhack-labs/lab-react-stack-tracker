import { useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const company = companies.find((c) => c.slug === companySlug);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      <h1>{company.companyName}</h1>
      <p>Website: {company.website}</p>
      <img src={company.logo} alt={company.companyName} />
    </div>
  );
}

export default CompanyPage;
