import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const { companies } = props;
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

      <div className="company-grid">
        {companies.map((company) => {
          return (
            <Link to={`/company/${company.id}`} key={company.id}>
              <div className="companyNameAndLogo">
                <p>{company.name}</p>
                <img src={company.logo} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

HomePage.propTypes = {
  companies: PropTypes.array.isRequired,
};

export default HomePage;
