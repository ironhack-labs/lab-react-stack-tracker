import React from 'react';
import { useParams, useSearchParams, Link } from "react-router-dom";

function TechnologyPage(props) {

  const { slug } = useParams();

  const [searchParams] = useSearchParams();
  const visitedCompanySlug = searchParams.get("visitedCompanySlug");

  const foundTechnology = props.technologies.find(
    (technology) => technology.slug === slug
  );


  if (!foundTechnology) {
    return <p>Technology not found!</p>;
  }

  return (
    <div>
      <h1>TechnologyPage</h1>
      <div className="technology-summary">
        <div className="technology-logo-wrapper">
          <img className="logo" src={foundTechnology.image} alt={foundTechnology.name} />
        </div>
        <div>
          <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
            {foundTechnology.name}
          </h1>
          <p><b>About</b></p>
          <p>{foundTechnology.description}</p>
        </div>
      </div>

      <Link to={`/company/${visitedCompanySlug}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;