import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const foundCompany = companies.find((company) => {
    return company.slug === companySlug;
  });

  if (!foundCompany) {
    return (
      <div>
        <h1>Not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Company Profile</h1>
      <div>
        <img src={foundCompany.logo} alt={foundCompany.name} height="100" />
      </div>
      <div>
        <h2>{foundCompany.name}</h2>
        <h4>About</h4>
        <p>{foundCompany.description}</p>
      </div>
      <div className="technology-stack-container">
        {foundCompany.techStack.map((technology,index)=>{
          return <Link className="technology-link" to={`/tech/${technology.slug}`} key={index}>
          <div className="image-container">
            <img src={technology.image} alt={technology.name} height="60" />
          </div>
          <span>{technology.name}</span></Link>
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
