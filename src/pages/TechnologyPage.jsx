import { useParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const technology = technologies.find((tech) => tech.slug === slug);

  if (!technology) return <div>Technology not found</div>;

  return (
    <div>
      <h1>{technology.name}</h1>
      <p>Description: {technology.description}</p>
      <img src={technology.image} alt={technology.name} />
    </div>
  );
}

export default TechnologyPage;
