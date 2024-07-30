import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";


function CompanyPage({companies, setActualCompany}) {

  const {companySlug} = useParams()
  setActualCompany(companySlug)
  
  const foundCompany = companies.find((company)=>{
    return company.slug === companySlug;
  })

  return (
    <div>

      <Navbar></Navbar>

      <h1>Company Profile</h1>

      <div className="company-container">
        <div className="image"><img src={foundCompany.logo} style={{width:'90px'}}alt="" /></div>
        <div className="about">
          <h2 id="company-title">{foundCompany.name}</h2>
          <h3>About</h3>
          <p>{foundCompany.description}</p>
        </div>
      </div>
      <div className="company-techs">
        {foundCompany.techStack.map((oneTech)=>{ return (
          <Link key={oneTech.slug} to={`/tech/${oneTech.slug}`}>
            <h3>{oneTech.name}</h3>
            <img src={oneTech.image} alt="" style={{height: '90px'}} />
          </Link>
        )})}
      </div>

    </div>
  );
}

export default CompanyPage;
