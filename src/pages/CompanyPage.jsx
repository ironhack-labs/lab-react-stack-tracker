import { useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import TechnologyPage from "./TechnologyPage";


function CompanyPage(props) {

  const params = useParams()

  const [companies, setCompanies] = useState()

  // console.log(params)

  // console.log(props)

  const companyFiltered = props.companiesData.filter((eachCompany) => {
      if (eachCompany.slug === params.companySlug) {
        return true
      } else {
        // console.log(eachCompany.slug)
        return false
      }
    }
  )
  console.log(companyFiltered)

  const foundCompany = companyFiltered[0]

  return (
    <div>
      <h1>Perfil de la empresa</h1>
      <div>
      <img src={foundCompany.logo} alt="logo" width={"180px"} href={foundCompany.website} />
      
        <h1>{foundCompany.name}</h1>
        
        <h3>About</h3>
        <p>{foundCompany.description}</p>

        <aside>

          {foundCompany.techStack.map((eachTechStack) => {
            return (
              <div key={eachTechStack.slug}>
                <Link to={`/tech/${eachTechStack.slug}`}>
                
                <img src={eachTechStack.image} alt="logo" width={"90px"} />
                </Link>
                <h3>{eachTechStack.name}</h3>
              </div>
            )
          })}
          
        </aside>

      </div>

    </div>
  );
}

export default CompanyPage;
