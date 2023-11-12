import { NavLink, useParams } from "react-router-dom";

function CompanyPage(props) {

  const {companySlug} = useParams ();

  const companyDetails = props.companiesList.find((company) => {
    return companySlug === company.slug;
  });

  return (
    <div>
      <h2>Company Profile</h2>
      <div className="company-selected">
        <img src={companyDetails.logo} alt="company logo" className="company-details-logo" />
        <div className="company-details">
          <h1>{companyDetails.name}</h1>
          <h3>About</h3>
          <p>{companyDetails.description}</p>
        </div>
      </div>

      <div className="tech-details">
        {companyDetails.techStack.map((element) => {
          return (
            <NavLink to={`/tech/${element.slug}`}>
              <img src={element.image} alt="tech logo" className="logo" />
              <p>{element.name}</p>
            </NavLink>
          );
        })}
      </div>


    </div>
  );
}

export default CompanyPage;
