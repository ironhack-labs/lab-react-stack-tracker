import { useParams, Link } from "react-router-dom";

function CompanyPage({ company }) {
  const { companySlug } = useParams();

  const newArray = [];
  company.forEach((company) => {
    if (company.slug == companySlug) {
      newArray.push(company);
    }
  });

  console.log(newArray);

  return (
    <div>
      <h1>Company Profile</h1>
      <div className="company-details">
        <img src={newArray[0].logo} alt={newArray[0].name} />
        <div>
          <h3>{newArray[0].name}</h3>
          <h5>About</h5>
          <p>{newArray[0].description}</p>
        </div>
      </div>
      <div className="tech-container">
        {" "}
        {newArray[0].techStack.map((tech) => (
          <Link key={tech.slug}>
            <div className="techstack">
              <img src={tech.image}></img>
              {tech.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
