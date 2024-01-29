import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const foundCompany = companies.find((company) => {
    return company.slug === companySlug;
  });

  if (!foundCompany) {
    return (
      <div className="not-found">
        <h1>Not found</h1>
      </div>
    );
  }

  return (
    <div id="CompanyPage">
      <h2>Company Profile</h2>
      <div className="company-profile-container">
        <div className="img-container">
          <div className="img-wrapper">
            <img src={foundCompany.logo} alt={foundCompany.name} height="100" />
          </div>
        </div>
        <div className="company-profile-details">
          <h1>{foundCompany.name}</h1>
          <h4>About</h4>
          <p>{foundCompany.description}</p>
        </div>
      </div>
      <div className="technology-stack-container">
        {foundCompany.techStack.map((technology, index) => {
          return (
            <Link
              className="technology-link"
              to={`/tech/${technology.slug}`}
              key={index}
            >
              <div className="image-container">
                <img src={technology.image} alt={technology.name} height="60" />
              </div>
              <span>{technology.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
