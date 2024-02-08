import Technology from "../technologies.json";
import { useParams, Link } from "react-router-dom";

function TechnologyPage(props) {
  const paramObj = useParams();

  const technologyObj = Technology.find((element) => element.slug == paramObj.TechSlug);
  
  if (!technologyObj) {
    return (
      <div className="TechnologyPage">
        <h1>Tech not found</h1>
      </div>
    )
  }

  return (
    <>
      <div className="TechnologyPage">
        <h1>Technology Details</h1>
      </div>
      <div className="TechnologyPage-Main">
        <div className="TechnologyPage-Presentation">
          <div className="TechnologyPage-Presentation-ImgBox">
            <img src={technologyObj.image} alt="ComanyLogo" />
          </div>
          <div className="TechnologyPage-Presentation-TxtBox">
            <h1>{technologyObj.name}</h1>
            <h2>About</h2>
            <div className="TechnologyPage-Presentation-TxtBoxP">
              <p>{technologyObj.description}</p>
            </div>
            <Link to={`/company/${props.techBackUrl}`}>
              <button>Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnologyPage;
