import React from 'react'
import { Link } from "react-router-dom"


function HomePage(props) {
  let {companies} = props
  return (
    <div>
    <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
    <div className="company-list">
      {companies.map((company) => (
        <div key={company.slug} className="company-item">
          <Link to={`/company/${company.slug}`} className="company-link">
            <img src={company.logo} alt={`${company.name} Logo`} className="company-logo" />
            <span className="company-name">{company.name}</span>
          </Link>
        </div>
      ))}
    </div>
  </div>
);
}
export default HomePage;
