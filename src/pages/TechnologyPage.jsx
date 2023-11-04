import { useParams } from "react-router-dom";

function TechnologyPage(props) {
  let {technologies} = props
  const {techSlug} = useParams()

  const foundTechnology = technologies.find((oneTechnology)=>{
    return oneTechnology.slug === techSlug;
  })
  return (
    <div>
      <h1>{foundTechnology.name}</h1>
      <p>{foundTechnology.description}</p>
      <img src={foundTechnology.image}></img>
    </div>
  );
}

export default TechnologyPage;
