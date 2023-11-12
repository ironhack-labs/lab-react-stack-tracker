import { useParams } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();
  const companyDetails = props.companyArray.find((company) => {
    return company.slug == companySlug;
  });

  return (
    <div>
      <h1>Company Profile</h1>
      <section className="companyProfile">
        <img className="logoCompanyPage" src={companyDetails.logo} />
        <div className="CompanyDetails">
          <h1>{companyDetails.name}</h1>
          <p>About: {companyDetails.description}</p>
          <a href="">{companyDetails.website}</a>
        </div>
      </section>
      <div>
        {companyDetails.techStack.map(function (techStackElement) {
          return (
            <>
              <img src={techStackElement.image} />
              <h2>{techStackElement.name}</h2>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
