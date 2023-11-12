import { useParams } from "react-router";
import { Link } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();

  const companyDetails = props.companiesArr.find((company) => {
    return company.slug === companySlug;
  });

  return (
    <div>
      <h1>Company Profile</h1>

      <h1>Company: {companyDetails.name}</h1>
      <h2>Website: {companyDetails.website}</h2>
      <section>Description: {companyDetails.description}</section>
      <img src={companyDetails.logo} alt="" />
    </div>
  );
}

export default CompanyPage;
