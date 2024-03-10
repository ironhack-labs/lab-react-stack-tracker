import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function HomePage({ companies }) {
  return (
    <div className="company">
      {companies.map((company) => (
        <div key={company.id}>
          <Link to={`/company/${company.name}`}>
            <h2>{company.name}</h2>
            <img className="company-img" src={company.logo} alt="logo" />
          </Link>
        </div>
      ))}
    </div>
  );
}

// prop validation

HomePage.propTypes = {
  companies: PropTypes.array.isRequired,
};

export default HomePage;

