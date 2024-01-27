import { Link, useNavigate, useParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const navigate = useNavigate()

  function goBack(){
    navigate(-1)
  }

  const foundTechnology = technologies.find((technology) => {
    return technology.slug === slug;
  });

  if (!foundTechnology) {
    return (
      <div className="not-found">
        <h1>Not found</h1>
      </div>
    );
  }
  return (
    <div id="TechnologyPage">
      <h1>Technology Profile</h1>
      <div>
        <img
          src={foundTechnology.image}
          alt={foundTechnology.name}
          height="100"
        />
      </div>
      <div>
        <h2>{foundTechnology.name}</h2>
        <h4>About</h4>
        <p>{foundTechnology.description}</p>
        <button onClick={goBack}>Back</button>
      </div>
    </div>
  );
}

export default TechnologyPage;
