import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {
  // following feedback steps below
  // access url params to get the company slug
  const { companySlug } = useParams();

  // uses find method to get matching company slug
  const companyToDisplay = companies.find(
    (company) => company.slug === companySlug
  );

  // guard clause in case the company doesn't appear
  if (!companyToDisplay) {
    return <p>company not found</p>;
  }

  return (
    <div className="tech-container">
      <img src={companyToDisplay.logo} />
      <h2>{companyToDisplay.name}</h2>
      <p>{companyToDisplay.description}</p>

      <ul>
        {companyToDisplay.techStack.map((tech) => (
          <li key={tech.slug}>
            <img src={tech.image} />
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
