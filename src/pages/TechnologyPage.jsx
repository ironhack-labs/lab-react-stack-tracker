/* eslint-disable react/prop-types */
import { useParams, Link, useLocation } from "react-router-dom";

function TechnologyPage(props) {
  let {technology} = props;
  const { slug } = useParams();
  const TechnolgyExist = technology.find((tech) => {     
    return tech.slug === slug;
  })

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const companySlug = searchParams.get("companySlug");

  return (
    <div id="techPage">
      <h1>Technology Details</h1>
      {TechnolgyExist ? 
        <div id="tech-info">
          <img src={TechnolgyExist.image}/>
          <div id="info-vertical">
            <h2>{TechnolgyExist.name}</h2>
            <h3>About</h3>
            <p>{TechnolgyExist.description}</p>
            <Link to={`/company/${companySlug}`} id="back-tech" >Back</Link>
          </div>
        </div> : "No company info"
      }
    </div>
  );
}
export default TechnologyPage;
