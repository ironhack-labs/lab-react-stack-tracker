import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CompanyPage(props) {
  
  const {companySlug} = useParams()

  const companyDetails = props.companiesArr.find((company) => {
    return company.slug === companySlug
  });

  
  return (
    <div>
      <h1>Company: {companyDetails.name}</h1>
      <h2>Website: {companyDetails.website}</h2>
      <p>{companyDetails.description}</p>
      <img className="logoDetails" src={companyDetails.logo}/>
      <ul className="listTech">
        {companyDetails.techStack.map((techObj) => (
          <div className="techStack" key={techObj.slug}>
            <Link to={`/tech/${techObj.slug}`}>
              <p>{techObj.name}</p>
              <img className="techLogo" src={techObj.image}/>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
