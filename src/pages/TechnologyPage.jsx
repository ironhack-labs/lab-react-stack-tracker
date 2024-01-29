import { useNavigate, useParams } from "react-router-dom";

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
      <h2>Technology Profile</h2>
      <div className="technology-profile-container">
      <div className="technology-img-wrapper">
        <img
          src={foundTechnology.image}
          alt={foundTechnology.name}
          height="100"
        />
      </div>
      <div className="technology-info-wrapper">
        <h1>{foundTechnology.name}</h1>
        <h4>About</h4>
        <p>{foundTechnology.description}</p>
      </div>
      </div>
        <button className="btn" onClick={goBack}>Back</button>
    </div>
  );
}

export default TechnologyPage;
