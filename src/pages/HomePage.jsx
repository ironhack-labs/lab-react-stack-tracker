import React from 'react';
import { Link } from 'react-router-dom';



const HomePage = ({companies}) => {
  console.log('Companies:', companies);
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
      {companies && companies.map(({ id, slug, logo, companyName }) => (
  <li key={id}>
    <Link to={`/company/${slug}`}>
      <img src={logo} alt={`${companyName} logo`} />
      {companyName}
    </Link>
  </li>
))}
      </ul>
    </div>
  );
};

export default HomePage;

