import { useParams, Link } from 'react-router-dom';

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const company = companies.find(company => company.slug === companySlug);

  if (!company) {
    return (
      <div>
        <h1>Company Profile</h1>
        <h3>No Company Found</h3>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Company Profile</h1>
      <div>
        <h2>{company.name}</h2>
        <img src={company.logo} alt={`${company.name} logo`} style={{ width: '100px' }} />
        <p><a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></p>
        <p>{company.description}</p>
        <h3>Tech Stack</h3>
        <ul>
          {company.techStack.map(tech => (
            <li key={tech.slug}>
              <Link to={`/tech/${tech.slug}`}>
                <img src={tech.image} alt={tech.name} style={{ width: '50px' }} />
                {tech.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default CompanyPage;
