import { useParams, Link } from 'react-router-dom';
import technologyData from '../technologies.json'; // correct file path

function TechnologyPage() {
  const { slug } = useParams();
  const technology = technologyData.find(tech => tech.slug === slug);

  if (!technology) {
    return (
      <div>
        <h1>Technology Details</h1>
        <h3>No Technology Found</h3>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{technology.name} Details</h1>
      <div>
        <h2>{technology.name}</h2>
        <img src={technology.image} alt={`${technology.name} logo`} style={{ width: '100px' }} />
        <p>{technology.description}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default TechnologyPage;
