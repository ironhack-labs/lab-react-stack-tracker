import companyData from "./../companies.json"
import { Navigate, useParams} from "react-router-dom"




function CompanyPage() {

  const {companySlug} = useParams()

  const foundCompany = companyData.find((elm) =>{
    return elm.slug === companySlug
  })

  if(!foundCompany) return <Navigate to="/error" />

  return (
    <>
    <div className="companyDescription">
      <h1>Company Profile</h1>
    <div>
      <figure className="logo">
      <img src={companyData.logo} alt="company-logo"/>
      </figure> 
      <article>
        <h2>{companyData.name}</h2>
        <p>About</p>
        <p>{companyData.description}</p>
      </article>
    </div>
    </div>
    </>
    )
}

export default CompanyPage;
