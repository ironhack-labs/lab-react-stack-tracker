import { useParams, useSearchParams, Link } from "react-router-dom";

function TechnologyPage(props) {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const previousCompany = searchParams.get("company");

  const techToDisplay = props.technologies.find((technology) => {
    return technology.slug === params.slug;
  });

  return (
    <div>
      <h1>Technology Details</h1>

      <div className="technology-page-information">
        <div className="technology-image-card">
          <img src={techToDisplay.image} alt={techToDisplay.name} />
        </div>
        <div className="technology-about">
          <h2>{techToDisplay.name}</h2>
          <h3>About</h3>
          <p>{techToDisplay.description}</p>
        </div>
      </div>
      <Link to={`/company/${previousCompany}`}>Back</Link>
    </div>
  );
}

export default TechnologyPage;
