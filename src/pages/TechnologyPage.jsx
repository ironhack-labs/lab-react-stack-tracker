import { useParams, useSearchParams, Link } from 'react-router-dom';

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const companySlug = searchParams.get('company');

  const technology = technologies && technologies.find((t) => t.slug === slug);

  if (!technology) {
    return (
      <div className="TechnologyPage">
        <h1>Technology Details</h1>
        <p>Technology not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="TechnologyPage">
      <h1>Technology Details</h1>

      <div className="technology-details" style={{ padding: '16px' }}>
        <img src={technology.image} alt={technology.name} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
        <h2>{technology.name}</h2>
        <p>{technology.description}</p>

        {companySlug ? (
          <Link to={`/company/${companySlug}`}>
            <button style={{ marginTop: '16px' }}>Back to Company</button>
          </Link>
        ) : (
          <Link to="/">
            <button style={{ marginTop: '16px' }}>Back to Home</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default TechnologyPage;
