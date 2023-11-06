import { useParams, useSearchParams, Link } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const visitedCompanySlug = searchParams.get("visitedCompanySlug");

  const foundTechnology = props.technologies.find(
    (technology) => technology.slug === slug
  );

  return (
     <div>
      <h1>TechnologyPage</h1>
      <p>Technology Details</p>

      <div className="technology-summary">
        <div className="technology-logo-wrapper">
          <img className="logo" src={foundTechnology.image} alt="" />
        </div>
        <div>
          <p>
            <h1>{foundTechnology.name}</h1>
            <b>About</b>
          </p>
          <p>{foundTechnology.description}</p>
          <br />
        </div>
      </div>

      <Link to={`/company/${visitedCompanySlug}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
