
import { useParams } from "react-router-dom";

function TechnologyPage(props) {
  const {slug} = useParams(); // we have defined the path(route) on App
  //as /tech/:slug and we want to store the last url on a variable using useParams
  // and that is why we use 
  let foundTechnology = props.technologies.find((technology) => {
    return technology.slug === slug;
  });
  console.log(foundTechnology)
  console.log(slug)
  console.log(useParams)
  // useParams().slug === slug from the path /tech/:slug
  return (
    <div>
      <h2>Technology Details</h2>
      {!foundTechnology && <h4>Technology not found</h4>}
      {foundTechnology && (
        <div>
          <h3>{foundTechnology.name}</h3>
          <img src={foundTechnology.image} alt='technology-image'></img>
          <h3>{foundTechnology.description}</h3>
        </div>)}
    </div>
  );
}

export default TechnologyPage;

/* {props.foundCompany.techStack.map((oneTechStack)=> {
        return (
          <div key={randomId()}>
          <Link to={`tech/${oneTechStack.slug}`}>
            <h4>{oneTechStack.name}</h4>
            <img src={oneTechStack.image} alt='TechStack image' width="150" ></img>
          </Link>
          </div>
        )
      })} */
