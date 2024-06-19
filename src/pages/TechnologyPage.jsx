import { useParams } from "react-router-dom";

function TechnologyPage({technology}) {
  const {slug} = useParams()

  const tech = technology.find(technology => technology.slug === slug)

  //console.log(tech)
  return (
    <div>
      <h1>{tech.name}</h1>
      <img src={tech.image} alt={tech.name} style={{height:100, width:100}} />
      <p>{tech.description}</p>
    </div>
  );
}

export default TechnologyPage;
