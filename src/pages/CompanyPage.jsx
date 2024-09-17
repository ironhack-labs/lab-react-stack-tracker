import companyData from "./../companies.json"
import { Navigate, useParams} from "react-router-dom"
import "./CompanyPage.css"




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
      <figure>
      <img src={foundCompany.logo} alt="company-logo" className="logoComp"/>
      </figure> 
      <article>
        <h2>{foundCompany.name}</h2>
        <p>About</p>
        <p>{foundCompany.description}</p>
      </article>
    </div>
    </div>
    </>
    )
}

export default CompanyPage;
