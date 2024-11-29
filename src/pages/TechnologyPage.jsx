import { useParams } from "react-router-dom";

function TechnologyPage({technologies}) {
  const {slug} = useParams();

  const technology = technologies.find((tech) => tech.slug === slug)
  console.log(technology);
  
  return (
    <div>
      <h1>Technology Details</h1>
      {technology.name}
      {technology.image}
      {technology.description}
    </div>
  );
}

export default TechnologyPage;
