import { useParams, useSearchParams, Link } from "react-router-dom";

function TechnologyPage({ techs }) {

  const { slug } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  // get search param to navigate back
  const companySlug = searchParams.get("companySlug");

  // get param to find current tech
  const currentTech = techs.find((tech) => tech.slug === slug);

  return (
    <div className="tech-page">
      <h1>Technology Details</h1>
      <section className="company-card">
        <div className="logo-div">
          <img src={currentTech.image} />
        </div>
        <div className="company-info">
          <h2>{currentTech.name}</h2>
          <h3>About</h3>
          <p>{currentTech.description}</p>
        </div>
      </section>
      <div className="tech-button-div">
        <Link to={`/company/${companySlug}`}>
          <button className="tech-button">Return</button>
        </Link>
      </div>
    </div>
  );
}

export default TechnologyPage;
