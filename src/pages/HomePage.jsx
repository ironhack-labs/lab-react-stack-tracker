import React from "react";
import { Link } from "react-router-dom";
import companies from "../companies.json";

function HomePage(props) {
  if (!props.companies || !Array.isArray(props.companies)) {
    return <div>No companies data available.</div>;
  }

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {props.companies.map((company) => (
          <li key={company.id}>
            <Link to={`/company/${company.slug}`}>
              <img src={company.logo} alt={`${company.name} Logo`} />
              {company.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
