/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../styles/CompanyPage.css";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();

  let foundCompany = props.companies.find((element) => {
    return element.id === companySlug;
  });
  return (
    <div>
      <div className="title-and-button">
        <div className="back-button-container">
          <Link className="back-button" to="/">
            Back
          </Link>
        </div>
        <h1 className="company-details-title">Company Profile</h1>
      </div>

      {foundCompany && (
        <>
          <div className="company-details-container">
            <div className="company-details-item">
              <img src={foundCompany.logo} className="company-icon"></img>
            </div>
            <div className="company-details-item">
              <h2>{foundCompany.name}</h2>
              {/* <p>{foundCompany.website}</p> */}
              <h4>About</h4>
              <p>{foundCompany.description}</p>
            </div>
          </div>

          <div className="tech-stack-container">
            {foundCompany.techStack.map((element) => {
              return (
                <Link
                  key={element.slug}
                  className="tech-stack-item"
                  to={`/tech/${element.slug}`}
                >
                  <img src={element.image} alt="" />
                  <p>{element.name}</p>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default CompanyPage;
