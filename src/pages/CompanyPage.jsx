import { useParams } from "react-router-dom";
import TechnologyPage from "./TechnologyPage";

function CompanyPage(props) {
  
  const {companySlug} = useParams()

  const companyDetails = props.companiesArr.find((company) => {
    return company.slug === companySlug
  });

  
  return (
    <div>
      <h1>Company: {companyDetails.name}</h1>
      <h2>Wesite: {companyDetails.website}</h2>
      <p> {companyDetails.description}</p>
      <img className="logoDetails"src={companyDetails.logo}/>

      <TechnologyPage techStack={companyDetails.techStack} />
    </div>
  );
}

export default CompanyPage;
