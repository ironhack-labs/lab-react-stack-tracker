import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const company = companies.find((c) => c.slug === companySlug);

  if (!company) {
    return (
      <div>
        <h1>Company Profile</h1>
        <p>Company not found.</p>
        <Link to="/">Back to all companies</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Company Profile</h1>
      <section className="profile">
        <img src={company.logo} alt={company.name} className="profile-logo" />
        <div className="profile-info">
          <h2>{company.name}</h2>
          <a href={`https://${company.website}`} target="_blank" rel="noreferrer">
            {company.website}
          </a>
          <p>{company.description}</p>
        </div>
      </section>

      <h3>Tech Stack</h3>
      <ul className="tech-grid">
        {company.techStack.map((tech) => (
          <li key={tech.slug}>
            <Link
              to={`/tech/${tech.slug}?company=${company.slug}`}
              className="card small"
            >
              <img src={tech.image} alt={tech.name} />
              <span>{tech.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
