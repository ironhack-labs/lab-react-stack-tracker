import { Link, useParams } from "react-router-dom";

function CompanyPage({companies}) {
  const {companySlug} = useParams();
  
  const companyToShow = companies.find((company) => (
    company.slug === companySlug
  ));

  return (
    <div>
      <h1>Company Profile</h1>
      {companyToShow.name}
      {companyToShow.website}
      {companyToShow.description}
      {companyToShow.logo}
      {companyToShow.techStack.map((tech) => (
        <Link key={companyToShow.id} to={`/tech/${tech.slug}`}>
          {tech.name}
          {tech.image}
        </Link>
      ))}
    </div>
  );
}

export default CompanyPage;
