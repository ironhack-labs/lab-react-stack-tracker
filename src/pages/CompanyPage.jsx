import { NavLink } from "react-router-dom";
function CompanyPage([...companies]) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {companies.map(company => (
          <li key={company.id}>
            <NavLink to={`/company/${company.slug}`}>
              <img src={company.logo} alt={company.name} />
              {company.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default CompanyPage;
