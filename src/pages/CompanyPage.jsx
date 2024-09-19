import { useParams } from "react-router-dom";

function CompanyPage({ companiesArr }) {
  const { companySlug } = useParams();

  const companyToDisplay = companiesArr.find((eachCompany) => {
    return eachCompany.slug === companySlug;
  });

  return (
    <div className="page">
      <h2>Company Profile</h2>
      <header>
        <div className="companyCardLogo">
          <img src={companyToDisplay.logo} alt="" />
        </div>

        <section style={{ width: "500px", textAlign: "center" }}>
          <h1>{companyToDisplay.name}</h1>
          <p>
            <strong>About</strong>
          </p>
          <p>{companyToDisplay.description}</p>
        </section>
      </header>

      <section className="techStackContainer">
        {companyToDisplay.techStack.map((tech, index) => (
          <div className="techCard" key={index}>
            <img src={tech.image} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CompanyPage;
