import React from "react";
import { useParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const technology = technologies.find((tech) => tech.slug === slug);

  return (
    <div>
      <h1>Technology Details</h1>
      <div>
        <h2>{technology.name}</h2>
        <p>Description: {technology.description}</p>
        <img src={technology.image} alt={technology.name} />
      </div>
    </div>
  );
}

export default TechnologyPage;
