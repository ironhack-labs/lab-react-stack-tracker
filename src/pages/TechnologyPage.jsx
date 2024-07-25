import { Link, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage({ technologies }) {

  const { slug } = useParams()
  const technology = technologies.find(tech => tech.slug === slug)
  const { name, description, image } = technology
  const [urlParams, setUrlParams] = useSearchParams()
  const companySlug = urlParams.get('c')

  return (
    <section className="TechnologyPage">
      <h1>Technology Details</h1>
      <div className="container">
        <div className="logo-container">
          <figure className="logo">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="data-container">
          <h2>{name}</h2>
          <p><strong>About</strong></p>
          <p>{description}</p>
        </div>
      </div>
      <Link to={`/company/${companySlug}`} className="btn">
        🚀  Back to Company
      </Link>
      <Link to={`/`} className="btn btn-light">
        🏠  Back to Home
      </Link>
    </section>
  );
}

export default TechnologyPage;
