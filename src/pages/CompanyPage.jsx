import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {

  const { companySlug } = useParams()

  const companyDetails = props.companiesArr.find((company) => {
    return company.slug === companySlug
  })

  return (
    <div>
      <h2>Company Profile</h2>
      <div className="company-info">
        <div>
          <img className="company-info-image" src={companyDetails.logo} />
        </div>
        <div className="company-info-content">
          <h1>{companyDetails.name}</h1>
          <h2>About</h2>
          <p>{companyDetails.description}</p>
        </div>
      </div>
      <div className="stack-list">
        {companyDetails.techStack.map((stack) => {
          return (
            <Link to={`/tech/${stack.slug}?companySlug=${companyDetails.slug}`}>
              <div className="stack-container">
                <img className="stack-logo" src={stack.image} />
                <h3 className="stack-name">{stack.name}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default CompanyPage
