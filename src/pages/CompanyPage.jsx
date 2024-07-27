import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

function CompanyPage({companies}) {

  const { companySlug } = useParams()

  const foundCompany = companies.find((oneCompany) => {
    return companySlug === oneCompany.slug
  })

  return (
    <div className="company-page-div">
      <h1>Company Profile</h1>
      <div className="company-info-and-pic">
        <img src={foundCompany.logo} alt={foundCompany.name} height='200'/>
        <div className="company-about">
          <h2>{foundCompany.name}</h2>
          <h4>About</h4>
          <p>{foundCompany.description}</p>
        </div>
      </div>
      <div className="company-technologies">
        {foundCompany.techStack.map((oneTech) => {
          return (
            <Link key={oneTech.id} to={`/tech/${oneTech.slug}`}>
              <div className="techs-of-company">
                <img src={oneTech.image} alt={oneTech.name} />
                <h5>{oneTech.name}</h5>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
