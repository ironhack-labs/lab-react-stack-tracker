import { Link } from "react-router";

function TechDetails({ techStack }) {
  return (
    <div className="tech-details">
      <img className="logo" src={techStack.image} alt="Company logo" />
      <div className="tech-info">
        <h2>{techStack.name}</h2>
        <h5>About</h5>
        <p>{techStack.description}</p>
      </div>
    </div>
  );
}

export default TechDetails;
