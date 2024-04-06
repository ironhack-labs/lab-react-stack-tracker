import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <ul>
      {companies.map((company) => (
        <li key={company.id}>
          <Link to={`/company/${company.slug}`}>
            <img src={company.logo} alt={company.companyName} />
            {company.companyName}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
