import CompanyDetails from "../components/CompanyDetails";
import { useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const foundCompany = companies.find((oneCompany) => oneCompany.slug === companySlug);
  return (
    <div className="company-details-container">
      <h2>Company Profile</h2>
      {!foundCompany && <h3>Error 404: the page not found!</h3>}
      {foundCompany && <CompanyDetails company={foundCompany} />}
    </div>
  );
}

export default CompanyPage;
