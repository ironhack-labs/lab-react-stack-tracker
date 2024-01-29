import {Link} from 'react-router-dom'
import {v4 as randomId} from 'uuid'
import {useParams} from 'react-router-dom'

function TechnologyPage(props) {
  
  const technologySlug = useParams()
  let foundTechnology = props.technologies.find((technology)=> {
    return technology.slug === technologySlug
  })

  return (
    <div>
      <h2>Technology Details</h2>
      
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