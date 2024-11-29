import { useParams } from "react-router-dom";

function CompanyPage({companies}) {
  const {companySlug} = useParams();
  
  const companyToShow = companies.find((company) => (
    company.slug === companySlug
  ));

  return (
    <div>
      <h1>Company Profile</h1>
      {companyToShow.name}
      {companyToShow.website}
      {companyToShow.description}
      {companyToShow.logo}
    </div>
  );
}

export default CompanyPage;
