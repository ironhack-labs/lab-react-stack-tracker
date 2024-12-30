import { Link } from "react-router";
import { useSearchParams } from "react-router-dom";

function TechDetails({ techStack }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const companySlug = searchParams.get("company");

  return (
    <div className="tech-details">
      <img className="logo" src={techStack.image} alt="Company logo" />
      <div className="tech-info">
        <h2>{techStack.name}</h2>
        <h5>About</h5>
        <p>{techStack.description}</p>
      </div>
      <Link to={`/company?company=${companySlug}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TechDetails;
