import { useParams } from "react-router";
import CompanyTech from "../components/CompanyTech";
import ProfileDetail from "../components/ProfileDetail";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const foundCompany = companies.find(company => company.slug === companySlug);
  if (!foundCompany) {
    return <h3>Company not found</h3>
  }

  return (
    <div className="company-container main-container">
      <h1>Company Profile</h1>
      <ProfileDetail name={foundCompany.name} logo={foundCompany.logo} description={foundCompany.description} />
      <div className="tech-list-container">
        {foundCompany.techStack.map(tech => <CompanyTech key={tech.slug} techStack={tech} companySlug={foundCompany.slug} />)}
      </div>
    </div>
  );
}

export default CompanyPage;
