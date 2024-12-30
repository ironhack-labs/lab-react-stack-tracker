/* eslint-disable react/prop-types */
function TechDetails({ techStack }) {

  return (
    <>
      <div className="tech-details">
        <img className="logo" src={techStack.image} alt="Company logo" />
        <div className="tech-info">
          <h2>{techStack.name}</h2>
          <h5>About</h5>
          <p>{techStack.description}</p>
        </div>
      </div>
        <button onClick={() => window.history.back()}>Back</button>
    </>
  );
}

export default TechDetails;
