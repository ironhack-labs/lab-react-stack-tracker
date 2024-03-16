import { useParams, useNavigate } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const navigate = useNavigate();
  const { slug } = useParams();
  const technology = technologies.find((tech) => tech.slug === slug);

  return (
    <main>
      <div className="conteiner">
        <h1 className="title">Technology Details</h1>
        <div className="tech-wrapper">
          <div className="tech">
            <div className="profile-img">
            <img
              width={200}
              height={200}
              src={technology.image}
              alt={technology.name}
            />
            </div>
            <div className="profile-info">
              <h2>{technology.name}</h2>
              <p>{technology.description}</p>
            </div>
          </div>
          <button
          className="btn"
            onClick={(event) => {
              event.preventDefault();
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </main>
  );
}

export default TechnologyPage;
