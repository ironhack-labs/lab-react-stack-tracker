import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../index.css";

function TechnologyPage(props) {
  const { slug } = useParams();
  const techDetails = props.technologiesArray.find((tech) => {
    return tech.slug == slug;
  });

  const [queryString] = useSearchParams();
  const lastVisitedCompany = queryString.get("companyslug");

  return (
    <div className="technologypage">
      <h1>Technology Details</h1>
      <div className="technologypage-tech-card">
        <p><strong>{techDetails.name}</strong></p>
        <img src={techDetails.image} />
        <p>{techDetails.description}</p>
      </div>
      <Link to={`/company/${lastVisitedCompany}`}>Back to home</Link>
    </div>
  );
}

export default TechnologyPage;
