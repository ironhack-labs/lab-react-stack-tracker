import { useParams } from "react-router-dom";
import TechCard from "../components/TechCard";
import "../App.css";

function CompanyPage({companies}) {

  const {companySlug} = useParams();

  const company = companies.find(comp => comp.slug === companySlug)
  
  return (
    <div>
      <h1>{company.name}</h1>
      <img src={company.logo} alt={company.name} style={{height:100, width:100}} />
      <p>{company.description}</p>
      <div>GO TO <a href={company.website} target="_blank" rel="noopener noreferrer">COMPANY OFFICAL WEBSITE</a></div>
      <div className="companyList">
      {
        company.techStack.map(tech => {
          return(
            <TechCard tech={tech} key={tech.id}/>
          )
        })
      }
      </div>
      
    </div>
  );
}

export default CompanyPage;
