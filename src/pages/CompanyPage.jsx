import { Link, useParams } from "react-router-dom";

function CompanyPage({companies}) {
  const {companySlug} = useParams();
  
  const companyToShow = companies.find((company) => (
    company.slug === companySlug
  ));
  const name = companyToShow.slug;

  return (
    <div>
      <h1>Company Profile</h1>
      {name}
      {companyToShow.website}
      {companyToShow.description}
      {companyToShow.logo}
      {companyToShow.techStack.map((tech) => (
        <Link key={companyToShow.id} to={`/tech/${tech.slug}?slug=${name}`}>
          {tech.name}
          {tech.image}
        </Link>
      ))}
    </div>
  );
}

export default CompanyPage;
