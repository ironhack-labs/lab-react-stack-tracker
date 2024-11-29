import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const companyToShow = companies.find((company) => (
    company.slug === companySlug
  ));
  const name = companyToShow.slug;

  return (
    <div className="d-flex flex-column mt-5">
      <h1 className="text-center mb-5">Company Profile</h1>
      <div className="mb-5 container gap-3 d-flex flex-row">
        <div className=" rounded container col-4 p-5 border border-black d-flex justify-content-center">
          <img width={"150px"} src={companyToShow.logo} alt={name} />
        </div>
        <div className="container col-4 d-flex flex-column">
          <h2 className="text-center fw-bolder">{name[0].toUpperCase() + name.slice(1)}</h2>
          {/* {companyToShow.website} */}
          <h3 className="text-center fs-5 mt-3">About</h3>
          <p className="mt-3">{companyToShow.description}</p>
        </div>
      </div>
      <div className="scroll-container">
        {/* linear-gradient(white, white) padding-box", 
              "linear-gradient(to right, #007bff, #0056b3) border-box */}
        {companyToShow.techStack.map((tech) => (
          <div className="scroll-item" key={companyToShow.id}>
            <div className="container d-flex flex-column">
              <Link className="text-decoration-none" to={`/tech/${tech.slug}?slug=${name}`}>
                <div style={{height:"125px", width:"125px"}}className="border border-black rounded container mb-3">
                  <img style={{padding: "10px", width: "100%", height :"100%",objectFit:"scale-down"}} src={tech.image} alt={tech.name} />
                </div>
                <div className="container d-flex justify-content-center">
                  <h3 className="fs-6 fw-semibold text-black">{tech.name}</h3>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
