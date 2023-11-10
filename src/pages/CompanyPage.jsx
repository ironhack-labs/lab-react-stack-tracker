import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'


function CompanyPage(props) {

  let {companySlug} = useParams();
  const navigate = useNavigate();

  const companyDetails = props.companiesArr.find((company)=>{
    return company.slug === companySlug;  
  })
  

  return (
    <>
      <h3>{companyDetails.name} <br />
        <img src={companyDetails.logo} alt="" />
        </h3>
        <h3>{companyDetails.website}</h3>
        <p><b>About:</b> <br />{companyDetails.description}</p>
        <div className="tech-stack-parent">
        {companyDetails.techStack.map((techstackObj)=>{
          return(
          <section className="tech-stack">
          <Link to={`/tech/${techstackObj.slug}`}>
          <img className="tech-stack-image" src={techstackObj.image} alt="" />
          </Link>
          <p>{techstackObj.name}</p>
        </section>
        )})}
        
        
        </div>
        <button onClick={()=>{navigate(-1)}}>Back</button>
      
      
    </>
  );
}

export default CompanyPage;
