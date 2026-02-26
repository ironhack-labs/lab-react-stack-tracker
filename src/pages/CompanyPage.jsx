import { useParams, Link } from 'react-router-dom';

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const company = companies && companies.find((c) => c.slug === companySlug);

  if (!company) {
    return (
      <div className="CompanyPage">
        <h1>Company Profile</h1>
        <p>Company not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="CompanyPage">
      <h1>Company Profile</h1>

      <div className="company-details" style={{ padding: '16px' }}>
        <img src={company.logo} alt={company.companyName} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
        <h2>{company.companyName}</h2>
        <p>Website: <a href={`https://${company.website}`} target="_blank" rel="noreferrer">{company.website}</a></p>
        {company.description && <p>{company.description}</p>}

        <h3>Tech Stack</h3>
        <div className="tech-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {company.techStack && company.techStack.map((tech) => (
            <Link key={tech.slug} to={`/tech/${tech.slug}?company=${companySlug}`}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px', border: '1px solid #ccc', borderRadius: '8px', width: '80px' }}>
                <img src={tech.image} alt={tech.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                <span style={{ marginTop: '4px', fontSize: '12px' }}>{tech.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <Link to="/"><button style={{ marginTop: '16px' }}>Back to Home</button></Link>
      </div>
    </div>
  );
}

export default CompanyPage;
