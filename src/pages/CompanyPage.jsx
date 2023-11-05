/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";

function CompanyPage(props) {
  let {companies, technologies} = props 
  let { companySlug } = useParams();
  console.log(companySlug)
  const companyExist = companies.find((theCompany) => {     
    return theCompany.slug === companySlug;
  })

  return (
    <div id="pageCompany">
      <h1>Company Profile</h1>
      {companyExist ? 
        <div>
          <div id="company-info">
            <img id="detail-logo"src={companyExist.logo}/>
            <div id="company-vertical">
              <h2>{companyExist.name}</h2>
              <h3>About</h3>
              <p>{companyExist.description}</p>
            </div>
          </div>
          <div id="tech-parent" >
            <ul id="list-elements">
                {technologies.map(tecnhology=>{
                  return(
                    <li key={tecnhology.id} >
                      <Link  id="tech-list" to={`/tech/${tecnhology.slug}?companySlug=${companySlug}`}>
                        <img id="logo" src={tecnhology.image}/>
                      </Link>
                      <div id="tech-name">{tecnhology.name}</div>
                    </li>
                    )
                })}
            </ul>
          </div>
          <Link to="/" id="button-back">Back</Link>
        </div> : "No company info"
      }
    </div>
  );
}

export default CompanyPage;
