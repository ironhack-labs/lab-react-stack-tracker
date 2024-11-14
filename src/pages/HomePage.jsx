import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ companies, technologies }) => {
  if (!Array.isArray(companies)) {
    return <div>Error: companies is not an array</div>;
  }

  return (
    <>
      <h3>StackTracker: Discover Tech Stacks Used by Top Companies</h3>
      <div>
        <article className='company-list'>
          {companies.map((company) => (
            <Link className='company-card' to={`/company/${company.slug}`} key={company.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div>
              <h2>{company.name}</h2>
              <img src={company.logo} alt={company.name} />
            </div>
          </Link>
          ))}
        </article>
      </div>
    </>
  );
};

export default HomePage;

