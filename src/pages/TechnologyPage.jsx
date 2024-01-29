import {Link} from 'react-router-dom'
import {v4 as randomId} from 'uuid'

function TechnologyPage(props) {
  

  return (
    <div>
      <h2>Technology Details</h2>
      {props.foundCompany.techStack.map((oneTechStack)=> {
        return (
          <div key={randomId()}>
          <Link to={`company/tech/${oneTechStack.slug}`}>
            <h4>{oneTechStack.name}</h4>
            <img src={oneTechStack.image} alt='TechStack image' width="150" ></img>
          </Link>
          </div>
        )
      })}
    </div>
  );
}

export default TechnologyPage;
