import { useParams, Link } from "react-router-dom";

function CompanyPage(props) {
  const { companies } = props;
  const { companySlug } = useParams();

  const foundCompany = companies.find((oneCompany) => {
    return oneCompany.slug === companySlug;
  });

  return (
    <div className="profile-container"><p><strong>Company Profile</strong></p>
    <div className="company-profile">{foundCompany ? (
        <div className="company-details">
          <div className="logo-and-info">
            <img src={foundCompany.logo} className="logo" alt={foundCompany.name} />
          </div>
          <div className="tech-stack">
          <div className="company-info">
            <p className="company-name-title">{foundCompany.name}</p>
          </div>
          <strong>About</strong>
          <p className="company-description">{foundCompany.description}</p>  
          </div>
        </div>):("Bad luck Senhor!")}
      <div className="list-container">
        <ul className="horizontal-list">
              {foundCompany.techStack.map((tech) => (
                <li key={tech.slug}>
                  <Link to={`/tech/${tech.slug}?visitedCompanySlug=${foundCompany.slug}`}>
                    <button>
                      <img src={tech.image} className="button-image" alt={tech.name} />
                      <h4>{tech.name}</h4>
                    </button>
                  </Link>
                </li>
              ))}
        </ul>
      </div>      
    </div>
    </div>
  );
}

export default CompanyPage;
