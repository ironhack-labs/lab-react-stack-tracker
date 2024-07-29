import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'

function HomePage(props) {

  
  
  return (
    <div className="homePage" style={{maxWidth:"2000px"}}>
      
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companyDivs">
      {props.companies.map((oneCompanie)=>{
        return (
          <div  className="companyDiv" key={uuidv4()}>
            <Link to={`/company/"${oneCompanie.id}`} ><h1>{oneCompanie.name}</h1></Link>
            <img style={{width:"120px"}} src={oneCompanie.logo} alt="" />
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default HomePage;
