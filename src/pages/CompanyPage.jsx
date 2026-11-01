import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const params = useParams();

  const foundCompany = companies.find(
    (company) => company.slug === params.companySlug,
  );

  const foundTechStack = foundCompany.techStack;

  const styleTech = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  };

  return (
    <div>
      <h1>Company Profile: {foundCompany.name}</h1>
      <img src={foundCompany.logo} alt="" width="100px" />
      <p>{foundCompany.description}</p>
      <p>Website: {foundCompany.website}</p>
      <div style={styleTech}>
        {foundTechStack.map((techStack, index) => {
          return (
            <Link to={`/tech/${techStack.slug}`} key={index}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>{techStack.name}</span>{" "}
                <img
                  src={techStack.image}
                  className="logo"
                  width="100px"
                />{" "}
              </div>{" "}
            </Link>
          );
        })}
        
      </div>
      <Link to="/" className="button">Back</Link>
    </div>
  );
}

export default CompanyPage;
