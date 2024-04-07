import { useParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();

  const technology = technologies.find(
    (technology) => technology.slug === slug
  );

  if (!technology) {
    return <div>No technology</div>;
  }

  return (
    <div>
      <h1>Technology Details</h1>
      <p>{technology.name}</p>
      <img src={technology.image} alt={technology.slug} />
      <p>{technology.description}</p>
    </div>
  );
}

export default TechnologyPage;
