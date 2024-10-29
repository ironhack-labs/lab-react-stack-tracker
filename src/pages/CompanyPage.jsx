import { useParams } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();
  const [company] = props.companies.filter((company) => {
    return company.slug === companySlug;
  });

  return (
    <div className="company">
      <img src={company.logo} />

      <div>
        <h2>{company.name}</h2>
        <h3>about</h3>
        <p>{company.description}</p>
      </div>
      <div>
        <span className="tech">
          {company.techStack.map((tech) => {
            return (
              <div>
                <img src={tech.image} />
                <p>{tech.name}</p>
              </div>
            );
          })}
        </span>
      </div>
    </div>
  );
}

export default CompanyPage;
