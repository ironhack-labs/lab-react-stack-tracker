import { useParams, Link } from "react-router-dom";
import { Card, Col } from "antd";

function CompanyPage(props) {

  let {companySlug} = useParams()
  //console.log('Slug:', companySlug)

  return (
    <Col>
      <h1>Company Profile</h1>
      <div>
        {props.allCompanies.map(company => {
          if (company.slug == companySlug) {
          return (
            <Card key={company.id}>
            <div className="company-card">
              <img className="logo-img" src={company.logo} alt="" />
              <div>
                <h2>{company.name}</h2>
                <h3>About</h3>
                <p>{company.description}</p>
              </div>
            </div>
              <ul style={{ listStyleType: 'none' }} className='list'>
                {company.techStack.map(technology => {
                    return(
                      <li key={technology.slug}>
                          <Link to={`/tech/${technology.slug}?company=${companySlug}`} style={{ textDecoration: 'none' }}> 
                          <div>
                          <h4>{technology.name}</h4> 
                          <img className="logo-img" src={technology.image}  alt="" />
                          </div>
                          </Link>
                      </li>
                    )
                })}
              </ul>
            </Card>
          )}
        })}
      </div>
    
    </Col>
  );
}

export default CompanyPage;
