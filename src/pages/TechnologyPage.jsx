import { useParams, Link, useSearchParams } from "react-router-dom";
import "../styles/TechnologyPage.css";

function TechnologyPage(props) {
  const { slug } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  let foundTechnology = props.technologies.find((element) => {
    return element.slug === slug;
  });
  return (
    <div>
      <div className="title-and-button">
        <div className="back-button-container">
          <Link className="back-button" to="/">
            Back
          </Link>
        </div>
        <h1 className="tech-details-title">Technology Details</h1>
      </div>

      {foundTechnology && (
        <>
          <div className="tech-details-container">
            <div className="tech-details-item">
              <img src={foundTechnology.image} className="tech-icon"></img>
            </div>
            <div className="tech-details-item">
              <h2>{foundTechnology.name}</h2>
              <h4>About</h4>
              <p>{foundTechnology.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TechnologyPage;
