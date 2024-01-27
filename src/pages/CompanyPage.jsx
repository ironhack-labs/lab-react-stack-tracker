import { useParams } from "react-router-dom";

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
        <div>
          <img src={companyDisplay.logo} width="200px" />
          <h1>{companyDisplay.name}</h1>
          <h2>About</h2>
          <p>{companyDisplay.description}</p>

          {companyDisplay.techStack.map((stackElement) => {
            return (
              <div key={stackElement.image}>
                <img src={stackElement.image} width="50px" />
                <h3>{stackElement.name}</h3>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default CompanyPage;
