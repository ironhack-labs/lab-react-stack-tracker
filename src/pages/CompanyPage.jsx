import { useParams } from "react-router-dom";

function CompanyPage({ companies, technologies }) {
  const { companySlug } = useParams();
  console.log(companySlug);
  console.log(companies, technologies);
  const company = companies.find((comp) => comp.slug === companySlug);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    width: "100%",
  };
  const cardStyle = {
    border: "1px solid grey",
    borderRadius: "10px",
    padding: "10px",
    width: "200px",
    textAlign: "center",
    minWidth: "150px",
    boxSizing: "border-box",
  };
  const imageStyle = {
    width: "100%",
    height: "120px",
    objectFit: "contain",
    borderRadius: "8px",
  };

  const textStyle = {
    fontSize: "14px",
    marginTop: "10px",
  };

  return (
    <div style={{ padding: "20px", alignContent: "center" }}>
      <h1 style={{ fontSize: "30px", textAlign: "center", marginTop: "50px" }}>
        Company Profile
      </h1>
      <div style={{ display: "flex", justifyContent:'center', marginBottom:'50px' }}>
        <div style={{ alignContent: "center", marginRight: "20px" }}>
          <img
            src={company.logo}
            alt={company.slug}
            style={{ width: "200px", minWidth: "150px" }}
          />
        </div>
        <div>
          <h1 style={{ fontSize: "45px" }}>{company.name}</h1>
          <p>
           
            <strong>about</strong>
          </p>
          <p style={{ width: "400px" }}>{company.description}</p>
        </div>
      </div>
      <div style={containerStyle}>
        {company.techStack.map((eachComTech) => {
          return (
            <div key={company.id} style={cardStyle}>
              <img
                src={eachComTech.image}
                alt={eachComTech.slug}
                style={imageStyle}
              />
              <p style={textStyle}>{eachComTech.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
