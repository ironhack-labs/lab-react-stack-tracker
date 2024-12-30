import companiesData from "../companies.json";
import CompanyDetails from "../components/CompanyDetails";
import { useSearchParams } from "react-router-dom";

function CompanyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const companySlug = searchParams.get("company");

  const foundCompany = companiesData.find((oneCompany) => oneCompany.slug === companySlug);
  return (
    <div className="company-details-container">
      <h2>Company Profile</h2>
      {!foundCompany && <h3>Error 404: the page not found!</h3>}
      {foundCompany && <CompanyDetails company={foundCompany} />}
    </div>
  );
}

export default CompanyPage;
