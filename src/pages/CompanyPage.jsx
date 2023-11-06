import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {
  let {companies} = props;
  let {companySlug} = useParams();

  const foundCompany = companies.find((oneCompany)=>{
    return oneCompany.slug === companySlug;
  })

  return (
    <div>
      <div>
        <h1>Company Profile</h1>
      </div>
      {foundCompany? <div id="details-card">
        <div>
          <img id="logo" src={foundCompany.logo} />
        </div>
        <div id="card-information">
          <h2>{foundCompany.name}</h2>
          <h3>About</h3>
          <p>{foundCompany.description}</p>
        </div>
        <div>
          <ul id="tech-grid">
            {foundCompany.techStack.map((tech, index)=>{
              return (
                <li id="tech-card">
                  <Link key={index} to={`/tech/${tech.slug}? companySlug=${companySlug}`}>
                  <img id="image" src={tech.image} />
                  <div>
                    {tech.name}
                  </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>: 'Bad luck'}
    </div>
    
  );
}

export default CompanyPage;
