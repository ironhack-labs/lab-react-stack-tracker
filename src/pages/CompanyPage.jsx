import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {
  const params = useParams();

  const companyToDisplay = props.companies.find((company) => {
    return company.slug === params.companySlug;
  });

  return (
    <div>
      <h1>Company Profile</h1>

      <div className="company-page-information">
        <div className="company-image-card">
          <img src={companyToDisplay.logo} alt={companyToDisplay.name} />
        </div>
        <div className="company-about">
          <h2>{companyToDisplay.name}</h2>
          <h3>About</h3>
          <p>{companyToDisplay.description}</p>
          <a href={`https://${companyToDisplay.website}`}>Website</a>
        </div>
      </div>

      <div className="tech-stack-list">
        {companyToDisplay.techStack.map((tech) => (
          <Link
            to={`/tech/${tech.slug}?company=${companyToDisplay.slug}`}
            key={tech.slug}
            className="tech-card"
          >
            <img src={tech.image} alt={tech.name} className="tech-image" />
            {tech.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
