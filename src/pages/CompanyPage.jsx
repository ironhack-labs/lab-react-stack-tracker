/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";

function CompanyPage(props) {
  let {companies} = props 
  let {technologies} = props
  const { companiesSlug } = useParams();
  const companyExist = companies.find((theCompany) => {     
    return theCompany.companySlug === companiesSlug;
  })

  return (
    <div>
      <h1>Company Profile</h1>
      {companies.name}
      {companyExist ? 
        <div>
        <img id="detail-logo"src={companyExist.logo}/>
          <h2>{companyExist.name}</h2>
          <h3>About</h3>
          <p>{companyExist.description}</p>
          <a href={companyExist.logo}/>
          {technologies.map(tecnhology=>{
            return(
                <div id="tech-parent" key={tecnhology.id}>
                    <li id="tech-list"> 
                        <Link id="detail-company" to={`/tech/${tecnhology.slug}`}>
                            {tecnhology.name} 
                            <img id="logo" src={tecnhology.image}/>
                        </Link>
                    </li>
                </div>
                )
          })}
          <Link to="/" >Back</Link>
        </div> : "No company info"
      }
    </div>
  );
}

export default CompanyPage;
