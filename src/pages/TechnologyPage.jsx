import React from "react";
import { useParams } from "react-router-dom";

function TechnologyPage({ technologiesArr }) {
  const { slug } = useParams(); 
const technologyToDisplay = technologiesArr.find((tech) => tech.slug === slug);

if (!technologyToDisplay) {
  return <p>Tecnología no encontrada.</p>; 
}

  return (
    <div className="page">
      <h2>Technology Details</h2>
      <header>
        <div className="companyCardLogo">
          <img src={technologyToDisplay.image} alt={technologyToDisplay.name} />
        </div>

        <section style={{ width: "500px", textAlign: "center" }}>
          <h1>{technologyToDisplay.name}</h1>
          <p>{technologyToDisplay.description}</p>
        </section>
      </header>
    </div>
  );
}

export default TechnologyPage;

