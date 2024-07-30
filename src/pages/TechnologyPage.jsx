import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";


function TechnologyPage({technologies, actualCompany}) {

  const {techSlug} = useParams();

  const foundTech = technologies.find((oneTech)=>{
    return oneTech.slug === techSlug
  })
  return (
    <div>
      <Navbar></Navbar>
      <h1>Technology Details</h1>
      <h2>{foundTech.name}</h2>
      <img src={foundTech.image} alt="" style={{width:'300px'}}/>
      <p style={{width:'300px', textAlign:'center', margin:'auto'}}>{foundTech.description} </p>
      <button><Link to={`/company/${actualCompany}`}>Back</Link></button>
    </div>
  );
}

export default TechnologyPage;
