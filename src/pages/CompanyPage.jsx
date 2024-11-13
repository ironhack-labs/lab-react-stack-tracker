import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies, technologies }) {
  const { companySlug } = useParams();
  console.log(`Company Slug: ${companySlug}`);

  const company = companies.find((company) => company.slug === companySlug);
  console.log(`Company`, company, typeof company);
  console.log(`Company ID`, company.id);

  if (!company) {
    return <div>Error: Company not found</div>;
  }

  // Ensure techStack is an array of slugs
  const techStackSlugs = company.techStack.map((tech) => tech.slug || tech);
  const companyTechnologies = technologies.filter((technology) =>
    techStackSlugs.includes(technology.slug)
  );
  console.log(`Company Technologies:`, companyTechnologies);

  return (
    <>
      <div key={company.id} className="company-profile">
        <div>
          <img src={company.logo} alt={company.name} />
        </div>
        <div>
          <h1>{company.name}</h1>
          <p>{company.website}</p>
          <p>About:</p>
          <p>{company.description}</p>
        </div>
      </div>

      <div>
        {companyTechnologies.map((technology) => (
          <div key={technology.slug}>
            <img src={technology.image} alt={technology.name} />
            <h3>{technology.name}</h3>
            <p>
              <Link to={`/tech/${technology.slug}`}>
                View {technology.name}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CompanyPage;
