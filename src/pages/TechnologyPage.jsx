import { useParams } from "react-router-dom";

function TechnologyPage(props) {
  // console.log(props);
  const technologies = props.technologies;

  const dynamicParams = useParams();
  // console.log(dynamicParams)
  // console.log(dynamicParams.slug);

  const foundTech = technologies.find((eachTech) => {
    if (eachTech.slug === dynamicParams.slug) {
      return true;
    } else {
      return false;
    }
  });

  // console.log(foundTech);

  return (
    <div className="company-page">
      <h1>Technology Details</h1>
      <div className="company-info-container">
        <div className="image-container">
          <img src={foundTech.image} />
        </div>
        <div className="info-section">
          <h2>{foundTech.name}</h2>
          <h3>About</h3>
          <p>{foundTech.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
