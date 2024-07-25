import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {

  const { companySlug } = useParams()
  const company = companies.find(company => company.slug === companySlug)
  const { logo, name, description } = company
  const techStackArray = company.techStack

  return (
    <section className="CompanyPage">
      <h1>Company Profile</h1>
      <div className="container">
        <div className="logo-container">
          <figure className="logo">
            <img src={logo} alt={name} />
          </figure>
        </div>
        <div className="data-container">
          <h2>{name}</h2>
          <p><strong>About</strong></p>
          <p>{description}</p>
        </div>
      </div>
      <div className="company-tech-stack">
        <ul>
          {
            techStackArray.map(techStack => {
              const { name, slug, image } = techStack
              return (
                <li key={slug}>
                  <Link to={`/tech/${slug}?c=${companySlug}`}>
                    <figure>
                      <img src={image} alt={name} />
                    </figure>
                    <p><strong>{name}</strong></p>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <Link to={`/`} className="btn btn-light">
        🏠  Back to Home
      </Link>
    </section>
  );
}

export default CompanyPage;
