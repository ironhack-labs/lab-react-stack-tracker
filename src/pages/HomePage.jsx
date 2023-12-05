import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ companies }) {
  return (
    <div>
      <h1 className="banner-hp">StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companies.map(company => {
        return (
          <div
            key={company.id}
            className='company'
          >
          <ul>
            <Link className='companies' to={`/company/${company.slug}`}>
              <>
                <h3>{company.name}</h3>
                <img className='logo' src={company.logo} alt="company-logo" />
              </>
            </Link>
          </ul>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
