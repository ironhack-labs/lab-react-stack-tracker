/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div className="page homepage">
      {companies.map((company) => (
        <Link
          to={`/company/${company.slug}`}
          key={company.id}
          className="company"
        >
          <h2 className="company__name">{company.name}</h2>
          <img
            className="company__logo"
            src={company.logo}
            alt={company.name}
          />
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
