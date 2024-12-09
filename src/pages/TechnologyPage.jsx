import { useParams } from "react-router-dom";


function TechnologyPage({technologies}) {

  const {slug} = useParams();

  const technologyToDisplay = technologies.find((tech) => tech.slug === slug)


  return (
    <div>
      <h1>Technology Details</h1>
      {technologyToDisplay.name}
      {technologyToDisplay.image}
      {technologyToDisplay.description}
    </div>
  );
}

export default TechnologyPage;
