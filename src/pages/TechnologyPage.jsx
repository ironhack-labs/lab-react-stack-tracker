import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const params = useParams();
  const foundTech = technologies.find((tech) => tech.slug === params.slug);
  const navigate = useNavigate ();

  return (
    <div>
      <h1>Technology Details</h1>
      
      <h2>{foundTech.name}</h2>
      <img src={foundTech.image} alt="" width="100px" />
      <p>{foundTech.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
    
  );
}

export default TechnologyPage;
