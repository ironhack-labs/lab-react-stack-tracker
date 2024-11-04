import { Link, useParams } from "react-router-dom";
import { CompanyCard } from "../components/CompanyCard";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const foundCompany = companies.find((e) => e.slug === companySlug);
  const compTechStack = [...foundCompany.techStack];
  return (
    <>
      <h1>Company Profile</h1>
      <div className="compDetails">
        <div className="compCard">
          <img src={foundCompany.logo} className="logo" />
        </div>
        <div className="compInfos">
          <h2>{foundCompany.name}</h2>
          <p>{foundCompany.description}</p>
          <a href={foundCompany.website}>{foundCompany.website}</a>
        </div>
      </div>
      <div className="compTechStack">
        {compTechStack.map((e) => (
          <Link key={e.name} to={`/tech/${e.slug}/?comp=${foundCompany.slug}`}>
            <div className="techCard">
              <h2>{e.name}</h2>
              <img src={e.image} className="logo" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CompanyPage;
