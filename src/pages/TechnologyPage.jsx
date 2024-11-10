import { Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
function TechnologyPage({ technologies }) {
  const { slug } = useParams();

  const technology = technologies.find(
    (technology) => technology.slug === slug
  );

  console.log("Hello: ", technology.name);

  const companySlug = useSearchParams('company');

  
  return (
    <div>
      <h1>Technology Details</h1>
      <img
        src={technology.image}
        width="50"
        alt={`Img of the ${technology.name}`}
      />
      <div className="details-info">
        <h1>{technology.name}</h1>
        <h3>About</h3>
        <p>{technology.description}</p>
      </div>
      <button><Link to={`/company/${companySlug}`} />Back</button>
    </div>
  );
}

export default TechnologyPage;
