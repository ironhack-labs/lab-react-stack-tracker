import { Link, useParams } from 'react-router-dom';

function CompanyPage({ companies, technologies }) {
  const { companySlug } = useParams();
  const singleCompany = companies.find((company) => company.slug === companySlug);

  if (!singleCompany) {
    return <div><h3>Company Not Found</h3></div>;
  }

  return (
    <div>
    <div className="company-page-top">
      <h1 className="banner">Company Profile</h1>
          <h1 className="company-name">{singleCompany.name}</h1>
        </div>

        <div className="company-profile">
          <img src={singleCompany.logo} alt="company-logo" />
          <p>{singleCompany.description}</p>
        </div>

      <div className="company-tech-stack">
        {singleCompany.techStack.map((tech) => (
          <Link key={tech.slug} to={`/tech/${tech.slug}`}>
            <img src={tech.image} alt="tech-logo" />
            <h3>{tech.name}</h3>
            <div className="arrow-icon"></div>
          </Link>
        ))}
      </div>

      <Link className="back-button" to="/">Back to home page</Link>
    </div>
  );
}

export default CompanyPage;
