import { useParams, useNavigate } from "react-router-dom";


function TechnologyPage(props) {

  let {slug} = useParams();
  const navigate = useNavigate();

  const techDetails = props.technologiesArr.find((tech)=>{
    return tech.slug === slug;  
  })
  

  return (
    <>
      <h2>{techDetails.name} <br />
      <br />
        <img src={techDetails.image} alt="" />
        </h2>
        <p><b>About:</b> <br />{techDetails.description}</p>
        <button onClick={()=>{navigate(-1)}}>Back</button>
      
      
    </>
  );
}

export default TechnologyPage;
