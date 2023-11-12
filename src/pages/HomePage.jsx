import React from 'react';
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage({ companies }) {
  return (
    <div className="home-page">
      <h1>Discover Tech Stacks Used by Top Companies</h1>

      <ul className="company-list">
        {companies.map((company) => (
          <li key={company.slug}>
            <Link to={`/company/${company.slug}`}>
              <img src={company.logo} alt={`${company.name} Logo`} className="company-logo" />
              <span className="company-name">{company.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
