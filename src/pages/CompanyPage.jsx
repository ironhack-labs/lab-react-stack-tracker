import { useParams } from "react-router-dom";

function CompanyPage({companies}) {
  const {companySlug} = useParams();
  console.log(companySlug);
  
  return (
    <div>
      <h1>Company Profile</h1>
    </div>
  );
}

export default CompanyPage;
