/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useParams, Link } from "react-router-dom";

function CompanyPage(props) {
  const {companySlug} = useParams()
  const {companyArr, techArr} = props;
 
  const foundCompany = companyArr.find(company=>company.slug === companySlug)

  const {name, description, website, logo} = foundCompany;
  const techMap = foundCompany.techStack.map((tech, index)=>{
    const div = 
    <div className="company-tech-card">
      <img src={tech.image}/>
      <p>{tech.name}</p>
    </div>
    return <Link key={index} to={`/tech/${tech.slug}`}>{div}</Link>
  })

  return (

    <div className="company-info">
      <img src={logo} />
      <h1>{name}</h1>
      <p>{description}</p>
      <h3>Tech Stack</h3>
      <div id="company-techstack-div">
        {techMap}
      </div>
    </div>
  );
}

export default CompanyPage;
