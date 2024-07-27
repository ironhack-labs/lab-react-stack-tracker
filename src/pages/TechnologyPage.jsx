import { useParams } from "react-router-dom";

function TechnologyPage({technologies}) {

  const { slug } = useParams()

  const foundTechnology = technologies.find((oneTech) => {
    return slug === oneTech.slug
  })

  return (
    <div className="technology-div">
      <h1>Technology Details</h1>
      <div className="technology-info">
        <img src={foundTechnology.image} alt={foundTechnology.name} />
        <div className="tech-name-and-about">
        <h2>{foundTechnology.name}</h2>
        <h4>About</h4>
        <p>{foundTechnology.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
