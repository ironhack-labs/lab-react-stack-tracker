import technologies from "../technologies.json";
import { useParams, useSearchParams, Link } from "react-router-dom";

function TechnologyPage() {
  const { slug } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const company = searchParams.get("company");
  console.log(slug, company);
  const technologyProfile = technologies.find((tech) => tech.slug === slug);
  return (
    <div className="technologyPage">
      <h1 className="technologyPage__name">{technologyProfile.name}</h1>

      <img
        className="technologyPage__image"
        src={technologyProfile.image}
        alt={technologyProfile.name}
      />
      <p className="technologyPage__description">
        {technologyProfile.description}
      </p>
      <Link to={`/company/${company}`} className="technologyPage__company">
        Back
      </Link>
    </div>
  );
}

export default TechnologyPage;
