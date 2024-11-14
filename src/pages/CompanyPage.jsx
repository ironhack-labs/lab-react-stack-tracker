import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies, technologies }) {
  const { companySlug } = useParams();
  console.log(`Company Slug: ${companySlug}`);

  const company = companies.find((company) => company.slug === companySlug);
  console.log("Company:", company);

  if (!company) {
    return <div>Error: Company not found</div>;
  }

  // Ensure techStack is an array of slugs
  const techStackSlugs = company.techStack.map((tech) => tech.slug || tech);
  const companyTechnologies = technologies.filter((technology) =>
    techStackSlugs.includes(technology.slug)
  );
  console.log("Company Technologies:", companyTechnologies);

  return (
    <>
      <div key={company.id} className="company-profile">
        <div>
          {company.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/150";
              }}
            />
          ) : (
            <p>No logo available</p>
          )}
        </div>
        <div>
          <h1>{company.name}</h1>
          <h3>About:</h3>
          <p>{company.description}</p>
        </div>
      </div>

      <div className="company-profile-techstack">
        {companyTechnologies.map((technology) => (
          <Link to={`/tech/${technology.slug}`} key={technology.slug}>
            <img src={technology.image} alt={technology.name} />
            <p>{technology.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CompanyPage;
