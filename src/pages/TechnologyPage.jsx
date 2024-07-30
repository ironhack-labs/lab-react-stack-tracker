import React from "react";
import { useParams } from "react-router-dom";
import technologies from '../technologies.json'



function TechnologyPage() {
  const {slug} = useParams()
  
  const technology = technologies.find(t=>t.slug===slug)
  if(!technology){
    return <div> Technology not found </div>
  }
  return (
       
    <div className="tech-details">
    <div className="tech-logo-box">
    <img src={technology.image} alt={technology.name} className="tech-logo"/>
    </div>
    <div className="tech-info">
    <h3>{technology.name}</h3>
    <p>{technology.description}</p>
    </div>
    </div>
    
   );
}

export default TechnologyPage;
