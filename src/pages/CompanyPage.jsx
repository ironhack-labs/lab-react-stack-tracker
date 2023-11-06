import { useParams, Link } from "react-router-dom";


function CompanyPage(props) {

    let {companies} = props;
    const {companySlug} = useParams();
  
  
    const foundCompany = companies.find((oneCompany)=>{
      return oneCompany.slug === companySlug;
  })

  return (
    <div>
    <h1>CompanyPage</h1>
    <h1>Company Profile</h1>
    {foundCompany? (<div>
      <h2>{foundCompany.name}</h2>
      <img src={foundCompany.logo} className="logo" />
      <h2>About</h2>
      <p>{foundCompany.description}</p>
      <ul>
        {foundCompany.techStack.map((tech)=>{
          return (
            <li>
              <Link to={`/tech/${tech.slug}?visitedCompanySlug=${foundCompany.slug}`}>
              <button>
                <img src={tech.image} className="logo"/>
                <h4>{tech.name}</h4>
              </button>
            </Link>
            </li>
          )
        })}
        </ul>
        </div>): ("Not found!")}
      </div>
  );
}

export default CompanyPage;
