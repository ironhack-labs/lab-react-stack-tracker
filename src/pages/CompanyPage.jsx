import { Link, useParams } from "react-router-dom";

export function CompanyPage(props) {

  const {companySlug} = useParams()

  const companyDetails = props.companies.find((elm) => {
    return elm.slug == companySlug
  })   

  return (
    <>
    <div> 
      <h3>Company Profile</h3>
      <h1>{companyDetails.name}</h1>
      <em>{companyDetails.website}</em>
      <p>{companyDetails.description}</p>
      <img src={companyDetails.logo} alt={companyDetails.name} />
    </div>


    <div className="techs">
      {companyDetails.techStack.map(elm => {
        return (
          <Link to={`/tech/${elm.slug}?company=${companySlug}`}>
            <h3>{elm.name}</h3>
            <img src={elm.image} alt={elm.name} />
          </Link>
        )
      })}
    </div>
    </>
  );
}

export default CompanyPage;
