import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {

  const { companySlug } = useParams();

  const currentCompany = companies.find((company) => company.slug === companySlug)

  return (
    <div className="company-page">
      <h1>Company Profile</h1>

        <section className="company-card">
          <div className="logo-div">
            <img src={currentCompany.logo} />
          </div>
          <div className="company-info">
            <h2>{currentCompany.name}</h2>
            <h3>About</h3>
            <p>{currentCompany.description}</p>
            <p>{currentCompany.website}</p>
          </div>
        </section>
        <section>
          <ul className="tech-ul">
            {currentCompany.techStack.map(tech => (
              <li className="tech-li" key={tech.slug}>
                <Link to={`/tech/${tech.slug}`}>
                  <div className="tech-img-div">
                    <img src={tech.image}/>
                  </div>
                  <p>{tech.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
    </div>
  );
}

export default CompanyPage;
