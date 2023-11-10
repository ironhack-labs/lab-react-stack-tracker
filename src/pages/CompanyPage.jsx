import { useParams, Link } from "react-router-dom";

function CompanyPage(props) {
  const { companies } = props;
  const { companySlug } = useParams();

  const foundCompany = companies.find((oneCompany) => {
    return oneCompany.slug === companySlug;
  });
  return (
    <div>
      <h1>CompanyPage</h1>
      <h2>Company Profile</h2>
      <div>
        <div>
          <img src={foundCompany.logo} alt={foundCompany.name} />
        </div>
        <div>
          <div>
            <p>{foundCompany.name}</p>
          </div>
          <strong>About</strong>
          <p>{foundCompany.description}</p>
        </div>
      </div>

      <div>
        <ul>
          {foundCompany.techStack.map((tech) => (
            <li key={tech.slug}>
              <Link to={`/tech/${tech.slug}?visitedCompanySlug=${foundCompany.slug}`}>
                <button>
                  <img src={tech.image} alt={tech.name} />
                  <h4>{tech.name}</h4>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default CompanyPage;
