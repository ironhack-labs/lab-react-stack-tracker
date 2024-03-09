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

/*
In the HomePage component, render the list of companies.

Each list item should be a React Router Link showing the company name and logo.

The component should take 1 prop:

companies: The array of companies coming from the App. 
This is the data from companies.json that you stored in the state of App in Iteration 1.

To allow users to navigate to a specific company's details page, embed the company's slug in the URL for each Link. When any of the company name on the HomePage are clicked, the company slug should show up in the URL, and the user should be navigated to the company details page (CompanyPage).



*/
