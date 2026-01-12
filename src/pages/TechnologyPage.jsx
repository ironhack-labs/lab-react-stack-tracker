
import { useParams, useNavigate } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const filteredTechnology = technologies.find((tech) => tech.slug === slug);
  
  return (
    <div className="d-flex flex-column">
      <h1 className="mb-5 mt-5 text-center">Technology Details</h1>
      <div className="d-flex text-center justify-content-around">
        <img src={filteredTechnology.image} style={{width: '250px'}} />
        <div style={{width: '420px'}}>
          <div className="fs-1 fw-semibold">{filteredTechnology.name}</div>
          <div className="fs-5 fw-semibold">About</div>
          <div className="fs-5">{filteredTechnology.description}</div>
        </div>
      </div>
      <button 
        className="btn btn-secondary mx-auto" 
        style={{width: '75px'}}
        onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default TechnologyPage;
