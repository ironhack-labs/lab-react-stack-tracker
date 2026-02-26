import { Link } from 'react-router-dom';

function HomePage({ companies }) {
  return (
    <div className="HomePage">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

      <div className="company-list">
        {companies && companies.map((company) => (
          <Link key={company.id} to={`/company/${company.slug}`}>
            <div className="company-card" style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '8px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '8px' }}>
              <img src={company.logo} alt={company.companyName} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              <span>{company.companyName}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
