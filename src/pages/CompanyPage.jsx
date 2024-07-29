import React from "react";
import { useParams } from "react-router-dom";

function CompanyPage(props) {

  let companyId = useParams().companySlug.slice(1)
  console.log(companyId)

  let company = props.companies.filter((oneCompanie)=>{
    return oneCompanie.id==companyId
  })
  console.log(company)
  return (
    <div className="companyProfile">
      <h1>Company Profile</h1>
      <div className="companyPageDiv">
        <img className="logoPicture" src={company[0].logo} alt="" />
        <div>
          <h1>{company[0].name}</h1>
          <h2>About</h2>
          <p className="description">{company[0].description}</p>
        </div>
      </div>
      <footer>
        {props.tech.map((oneTech)=>{
          return(
            <div>
              <h2>{oneTech.name}</h2>
              <img className="techPictures" src={oneTech.image} alt="" />
            </div>
          )
        })}
      </footer>
    </div>
  );
}

export default CompanyPage;  
