import { useParams, Link } from "react-router-dom";

function CompanyPage({companies}) {
  const {companySlug} = useParams();

  const companyToDisplay = companies.find((company) =>
    company.slug === companySlug
  )

  return (
    <div>
      <h1>Company Profile</h1>

      {companyToDisplay.name}
      {companyToDisplay.website}
      {companyToDisplay.description}
      {companyToDisplay.logo}

      {companyToDisplay.techStack.map((tech) => (
        <Link key={companyToDisplay.id} to={`/tech/${tech.slug}`}>
          {tech.name}
          {tech.image}
        </Link>
      ))}
    </div>
  );
}

export default CompanyPage;
