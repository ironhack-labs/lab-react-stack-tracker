
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


function CompanyPage({companies}) {
  const navigate = useNavigate()
  const {companySlug} = useParams()
  const company = companies.find((company)=> {
    return company.slug === companySlug
    })
    console.log(companySlug)
  return (
    <>
    <header>
      <h1>Company Profile</h1>
    </header>
    <div className='details'>
    <img src={company.logo} alt="company logo"/>
    <div className='info'>
    <h2>{company.name}</h2>
    <p>{company.website}</p>
    <p>{company.description}</p>
    </div>
    </div>
    <div className='tech'>
      {company.techStack.map((tech)=> {
        return (
          <div key={tech.slug} className='card'>
          <Link to={`/tech/${tech.slug}`} >
          <p className='link'>{tech.name}</p>
          <img src={tech.image} alt="techstack logo"/>
          </Link >
          </div>
          )
      })}
    </div>
          <button onClick={()=>{navigate(-1)}}>Back</button>
    </>
  );
}

export default CompanyPage;
