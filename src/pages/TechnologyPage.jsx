import { useParams } from "react-router-dom";
 
function TechnologyPage(prop) {
  const {slug} = useParams();
  const foundTech = prop.techArr.find(tech=>tech.slug === slug)
  const {name, image, description} = foundTech
  return (
    <div className="company-info">
      <img src={image}/>
      <h1>{name}</h1>
      <p>{description}</p>
      <button to="">Back</button>
    </div>
  );
}

export default TechnologyPage;
