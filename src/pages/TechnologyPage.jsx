
import React from "react";
import { useParams } from "react-router-dom";

const TechnologyPage = ({ technologies }) => {
  const { slug } = useParams();
  const technology = technologies.find((t) => t.slug === slug);

  if (!technology) {
    return <div>Technology not found</div>;
  }

  return (
    <div>
      <h1>Technology Details: {technology.name}</h1>
      <img src={technology.image} alt={technology.name} className="icon" />
      <p>{technology.description}</p>
    </div>
  );
};

export default TechnologyPage;
