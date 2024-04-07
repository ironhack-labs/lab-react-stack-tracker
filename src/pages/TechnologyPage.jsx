import { useParams } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();

  let foundTechnology;

  props.technologies.forEach((technology) => {
    if (technology.slug === slug) {
      foundTechnology = technology;
    }
  });

  if (!foundTechnology) {
    return <div>Error slug not found</div>;
  }

  return (
    <div>
      <h1>Technology Details</h1>
      <div>{foundTechnology.name}</div>
      <img src={foundTechnology.image} />
      <div>{foundTechnology.description}</div>
    </div>
  );
}

export default TechnologyPage;
