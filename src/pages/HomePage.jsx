import { Link } from "react-router-dom";
import React from "react";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {props.companies.map((company) => (
          <li key={company.slug}>
            <Link to={`/company/${company.slug}`}>
              <img src={company.logo} style={{ width: "50px" }} />
              {company.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
