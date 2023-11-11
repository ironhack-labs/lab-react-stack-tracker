import { useParams } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();

  const techDetails = props.techStack.find((tech) => tech.slug === slug);

  return (
    <div>
      <h1>{techDetails.name}</h1>
      <img className="techImage" src={techDetails.image} alt={`${techDetails.name} Image`} />
    </div>
  );
}

export default TechnologyPage;