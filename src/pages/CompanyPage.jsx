import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CompanyPage({companies}) {

  let {company} = useParams()

  const companyData = companies.find((eachCompany) => {
    return eachCompany.slug === company
  })

  return (
    <>
    <div>
      <h1>Company Profile</h1>
      <div className="card">
        <h3>{companyData.name}</h3>
        <img className="logo" src={companyData.logo} alt="logo" />
        <p>{companyData.description}</p>
      </div>
    </div>

    <div>
      <ul className="lista-bottom">
        {companyData.techStack.map((eachTech, index) => {
          return (
            <li key={index}>
              <Link to={`/tech/${eachTech.slug}?company=${companyData.slug}`}>
              <img src={eachTech.image} alt="logo" className="logo" />
              <p>{eachTech.name}</p>
              </Link>

            </li>

          )
        })}
      </ul>
    </div>
    </>
  );
}

export default CompanyPage;
