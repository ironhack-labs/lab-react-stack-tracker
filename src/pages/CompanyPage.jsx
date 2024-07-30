import { useParams } from "react-router-dom";
import '../App.css'
import { Link } from "react-router-dom";

function CompanyPage({companies}) {
  const {slug} = useParams()
  const company = companies.find(c=>c.slug===slug)
  if(!company){
    return <div> Company not found </div>
  }
  return (
    <div>
    <h2>Company Profile</h2>
    <div className="company-details">
    <div className="company-logo-box">
    <img src={company.logo} alt={company.name} className="company-logo" />
    </div>
        <div className="company-info">
          <h1>{company.name}</h1>
      <h5> About </h5>
      <p>{company.description}</p>
      </div>
      </div>
      <div className="technologies-container">
      {company.techStack.map(tech => (
        <Link key={tech.slug} to={`/technology/${tech.slug}`} className="technology-item">
            <img src={tech.image} alt={tech.name} />
            <p>{tech.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
