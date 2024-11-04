import { Link, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage({ tech }) {
  const { slug } = useParams();
  const [queries] = useSearchParams();
  console.log("Queries", queries);
  const compSlug = queries.get("comp");

  const foundTech = tech.find((e) => e.slug === slug);

  return (
    <div>
      <h1>TechnologyPage</h1>
      <h2>{foundTech.name}</h2>
      <p>{foundTech.description}</p>
      <img src={foundTech.image} />
      <div>
        <Link to={`/company/${compSlug}`}>
          {/* <Link to="/"> */}
          <button>Back to company</button>
        </Link>
      </div>
    </div>
  );
}

export default TechnologyPage;
