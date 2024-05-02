import { Link, useParams } from "react-router-dom";
import companies from './../companies.json'

function CompanyPage() {

  const { companySlug } = useParams()

  const foundCompany = companies.find(elm => elm.id === companySlug)

  return (
    <div className="companies">
      <h1>Company Profile</h1>
      <div>
        <hr />
        <h1>{foundCompany.name}</h1>
        <img className="company-logo" src={foundCompany.logo} alt={foundCompany.name} />
        <h2>About</h2>
        <p className="company-desc">{foundCompany.description}</p>
        <hr />
        <h2>Tech Stack</h2>
        {foundCompany.techStack.map((elem, index) => {
          return (
            <Link className="tech-card" key={index} to={`/tech/${index}`}>
              <div className="stack-list">
                <img className="tech-logo" src={elem.image} alt={elem.name} />
                <h3>{elem.name}</h3>
              </div>
            </Link>
          )
        })}
        <hr />
        <Link className="company-return-link" to={'/'}>Back to Company List</Link>
      </div>
    </div>
  );
}

export default CompanyPage;
