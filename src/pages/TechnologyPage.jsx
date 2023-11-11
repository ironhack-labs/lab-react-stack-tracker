import { useParams } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();
  const [technologyDetails] = props.technologiesArr.filter((tech, index) => {
    return tech.slug === slug;
  }); 
  console.log(technologyDetails)

  return (
    <div>
      <h2>Technology Details</h2>
        <h3>{technologyDetails.name}</h3>
        <img src={technologyDetails.image} alt="technology image" />
        <p>{technologyDetails.description}</p>
    </div>
  );
}

export default TechnologyPage;
