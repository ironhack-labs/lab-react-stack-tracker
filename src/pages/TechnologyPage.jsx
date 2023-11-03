/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";

function TechnologyPage(props) {
  let {technology} = props;
  const { techslug } = useParams();
  const TechnolgyExist = technology.find((tech) => {     
    return tech.slug === techslug;
  })

  return (
    <div>
      <h1>Technology Details</h1>
      {technology.name}
      {TechnolgyExist ? 
        <div>
        <img src={TechnolgyExist.image}/>
          <h2>{TechnolgyExist.name}</h2>
          <h3>About</h3>
          <p>{TechnolgyExist.description}</p>
          <Link to="/company/${company.slug}" >Back</Link>
        </div> : "No company info"
      }
    </div>
  );
}
export default TechnologyPage;
