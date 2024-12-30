import { Link } from "react-router-dom";

function CompanyCard({ company }) {
  return (
    <li className="company-card">
      <Link to={`/company/${company.slug}`}>
        <h4>{company.name}</h4>
        <img className="logo" src={company.logo} alt="Company logo" />
      </Link>
    </li>
  );
}

export default CompanyCard;
