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
        {props.techs.map((tech) => {
          return (
            <div className="tech">
              <img src={tech.image} className="logo" />
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
