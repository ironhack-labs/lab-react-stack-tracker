import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function HomePage({ companies }) {
  return (
    <div>
      <h1>HomePage</h1>
      <h2>List of Companies</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            <Link to={`/company/${company.slug}`}>
              <img src={company.logo} alt={`${company.name} logo`} />
              {company.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

HomePage.propTypes = {
  companies: PropTypes.array.isRequired,
};

export default HomePage;
