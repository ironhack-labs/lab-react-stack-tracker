import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TechnologyPage(props) {
  
  const {techSlug} = useParams()

  const techDetails = props.techStack.find((tech) => {
    return tech.slug === techSlug
  });

  
  return (
    <ul className="listTech">
    {props.techStack.map((techObj) => {
      return (
        <>
          <div className="techStack">
            <Link to={`/tech/${techObj.slug}`}>
              <p>{techObj.name} </p>
              {<img className="techLogo" src={techObj.image} />}
            </Link>
          </div>
        </>
      );
    })}
  </ul>
  );
}

export default TechnologyPage;
