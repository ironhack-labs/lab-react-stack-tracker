import companyData from "./../companies.json"
import { Navigate, useParams} from "react-router-dom"




function CompanyPage() {

  const {company_name} = useParams()

  const foundCompany = companyData.find((elm) =>{
    return elm.id === company_name
  })

  if(!foundCompany) return <Navigate to="/error"

  return (
    <>
    <div className="companyDescription">
      <h1>Company Profile</h1>
    <div>
      <figure className="logo">
      <img src={company.logo} alt="company-logo"/>
      </figure> 
      <article>
        <h2>{company.name}</h2>
        <p>About</p>
        <p>{company.description}</p>
      </article>
    </div>
    </div>
    </>
    )
}

export default CompanyPage;
