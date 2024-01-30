import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { v4 as randomId } from "uuid";
import { Link } from "react-router-dom";

function CompanyPage(props) {
  const [currentUrl, setCurrentUrl] = useSearchParams();
  const slug = currentUrl.get("companyId");
  console.log("slug: ", slug);

  let foundCompany = props.companies.find((company) => {
    return company.slug === slug;
  });
  // useParams is an object!!
  return (
    <div>
      <h2>Company Profile</h2>
      <div>
        <div>
          {!foundCompany && <h3>No matching company</h3>}
          {foundCompany && (
            <div className="company-profile-list">
              <img className="company-about-img" src={foundCompany.logo} alt="logo from found company" width="250"></img>

              <div className="company-about">
                <h3>{foundCompany.name}</h3>
                <p>{foundCompany.website}</p>
                <p>{foundCompany.description}</p>
              </div>
            </div>
          )}
        </div>
        <div className="tech-list">
          {foundCompany.techStack.map((oneTechStack) => {
            return (
              <div key={randomId()}>
                <Link to={`/tech/${oneTechStack.slug}`} state={{ from: slug }}>
                  <h4>{oneTechStack.name}</h4>
                  <img className="tech-img" src={oneTechStack.image} alt="TechStack image" width="150"></img>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;

//<Link to={`/tech/${oneTechStack.slug}`}> with /tech we get a separate url tech/java
// but without, so tech/$   we get a url that concatenates with the path defined on the App
// so /company/uber/java !!

//<TechnologyPage foundCompany={foundCompany} technologies={props.technologies}></TechnologyPage>
