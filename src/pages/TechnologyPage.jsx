import { useParams } from "react-router-dom";

function TechnologyPage(technologies) {

  const {slug}=useParams()

  const foundTechSlug = technologies.find(tech => tech.slug === slug)
  return (
    <div>
      <h1>Technology Details</h1>
    </div>
  );
}

export default TechnologyPage;
