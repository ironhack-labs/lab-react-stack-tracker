import { useParams, Link } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();
  const result = props.companies.find((company) => {
    if (companySlug === company.slug) {
      return true;
    } else {
      return false;
    }
  });
  if (!result) return <div>Error</div>;
  return (
    <div>
      <h1>Company Profile</h1>
      <h3>{result.name}</h3>
      <div>{result.website}</div>
      <div>{result.description}</div>
      <img src={result.logo} />
      {result.techStack.map((techStack) => (
        <div key={techStack.slug}>
          <Link to={`/tech/${techStack.slug}`}>
            <img src={techStack.image} style={{ width: "50px" }} />
          </Link>
        </div>
      ))}
      <p> {companySlug}</p>
    </div>
  );
}

export default CompanyPage;
