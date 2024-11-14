import { useParams, Link } from "react-router-dom";

function TechnologyPage({ technologies }) {
  
  const { slug } = useParams();
  const technology = technologies.find((technology) => technology.slug === slug);
  console.log("Technology:", technology);
  
  
  return (
    <div key={technology.id} className="company-profile">
        <div>
          {technology.image ? (
            <img
              src={technology.image}
              alt={technology.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/150";
              }}
            />
          ) : (
            <p>No logo available</p>
          )}
        </div>
        <div>
          <h1>{technology.name}</h1>
          <h3>About:</h3>
          <p>{technology.description}</p>
        </div>
      </div>
  );
}

export default TechnologyPage;
