import { useParams, useSearchParams, Link } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const visitedCompanySlug = searchParams.get("visitedCompanySlug");
  const foundTechnology = props.technologies.find((technology) => technology.slug === slug);
    
    return (
      <div className="technology-container"><p><strong>Technology Details</strong></p>
        <div className="technology-summary">
          <div className="technology-logo-wrapper">
            <img className="logo" src={foundTechnology.image} alt="technology-image" />
          </div>
          <div className="info-container">
            <p className="technology-name">{foundTechnology.name}</p>
            <strong>About</strong>
            <p className="technology-description">{foundTechnology.description}</p>
            <br />
          </div>
        </div>
          <Link to={`/company/${visitedCompanySlug}`}>
            <button className="back-button">Back</button>
          </Link>
      </div>
);
}

export default TechnologyPage