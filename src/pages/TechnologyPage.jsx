import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";


function TechnologyPage({technologies}) {
  let {slug} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const companySlug = searchParams.get("companySlug");

  let technology = technologies.find(t => t.slug === slug);

  return (
    <div>
      <h1>Technology Details</h1>

      <div className="tech-area">
        <div className="technology main-title">
          <img src={technology.image} className="technology-img"></img>
        </div>

        <div className="technology-details">
          <h1>{technology.name}</h1>
          <h4>About</h4>
          <p>{technology.description}</p>
        </div>              
      </div>

      <Link to={`/company/${companySlug}`}>
        <button id="back-button">Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
