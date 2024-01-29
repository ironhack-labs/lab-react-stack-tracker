import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {
  const { companiesData } = props;

  const { companySlug } = useParams();
  // console.log(companiesData);
  // console.log(companySlug);

  const companyDisplay = companiesData.find((company) => {
    return company.slug === companySlug;
  });

  // console.log(companyDisplay);

  return (
    <div>
      <h1>Company Profile</h1>
      {
        <div id="company-container">
          <img src={companyDisplay.logo} width="200px" />
          <h1>{companyDisplay.name}</h1>
          <h2>About</h2>
          <p>{companyDisplay.description}</p>
          <div id="technology-container">
            {companyDisplay.techStack.map((stackElement) => {
              return (
                <Link
                  className="technology-card"
                  to={`/tech/${stackElement.slug}?company=${companySlug}`}
                  key={stackElement.image}
                >
                  <div>
                    <div className="technology-logo-div">
                      <img
                        src={stackElement.image}
                        className="technology-logo-img"
                      />
                    </div>
                    <h3>{stackElement.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      }
    </div>
  );
}

export default CompanyPage;
