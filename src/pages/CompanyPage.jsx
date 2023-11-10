import { useParams } from "react-router-dom";

function CompanyPage(props) {

  let {companySlug} = useParams();

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
          <img className="tech-stack-image" src={techstackObj.image} alt="" />
          <p>{techstackObj.name}</p>
        </section>
        )})}
        </div>
      
      
    </>
  );
}

export default CompanyPage;
