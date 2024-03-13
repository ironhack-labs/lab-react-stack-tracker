import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const company = companies.find((company) => company.name === companySlug);
  return (

    <div>
      <h1>{company.name} company Profile</h1>
      <div className="company-profile">
        <div className="name">{company.name}</div>
        <div className="description">{company.description}</div>
        <img className="company-img" src={company.logo} alt="logo" />
      </div>


    </div>
  )
}

CompanyPage.propTypes = {
  companies: PropTypes.array.isRequired
};

export default CompanyPage;