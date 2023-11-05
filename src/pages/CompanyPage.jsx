import { useParams, Link} from "react-router-dom";

function CompanyPage(props) {

  const {companySlug} = useParams();

  let {details} = props;
  const companyDetails = details.find((oneCompany)=>{
    return oneCompany.name === companySlug;
  })

  return (
    <div>
      <div>
      <h2>Company Profile</h2>
      <div className="company-details">
            
            <div className="company-description1">
                <img src={companyDetails.logo} alt={`${companyDetails.name} logo`} className="logo"/> <br />
            </div>

            <div className="company-description2">
                <h1><b>{companyDetails.name}</b></h1> 
                <p><b>Description:</b> <br /> {companyDetails.description}</p> 
            </div>
            </div> 
      </div>
      
      {companyDetails? 
          
            
            <div className="tech-stack">
            {companyDetails.techStack.map((tech)=>{
                return( 
                    <div key={tech.slug} className="tech-stack-card">
                      <Link to={`/company/${tech.slug}`}>
                          <img src={tech.image} alt={`${tech.name} image`}  className="logo-tech"/>
                      </Link>
                      <p>{tech.name}</p>
                  </div>)
          })}
            </div>
          
        : "unavailable" 
      }
    </div>
  );
}

export default CompanyPage;
