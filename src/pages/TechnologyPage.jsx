import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TechnologyPage(props) {
  const { technologySlug } = useParams()
  const technology = props.getTechnology(technologySlug)

  return (
    <div>
      <h1>Technology Details</h1>
      <h2>{technology.name}</h2>
      <img className="profileLogo" src={technology.image} alt={`${technology.name}'s image`}></img>
      <p>About</p>
      <h3>{technology.description}</h3>

    </div>
  );
}

export default TechnologyPage;
