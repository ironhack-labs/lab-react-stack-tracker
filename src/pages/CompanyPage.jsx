import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function CompanyPage({companies}) {

  const styleLogo = {
    width:"20%"
  }

  const paramDinCompany = useParams()
  
  const companyToShow = companies.find((eachComp) => {
    return eachComp.slug === paramDinCompany.companySlug
  });

  return (
    <div>
      <h1>Company Profile</h1>
      <h3>{companyToShow.name}</h3>
      <p>{companyToShow.website}</p>
      <p>{companyToShow.description}</p>
      <img src={`${companyToShow.logo}`} alt="" style={styleLogo}/>
      <div className="techs-container">
        
            {

          companyToShow.techStack.map((elem, index)=>(
            <Link 
            key={index}
            to={`/tech/${elem.name}`}>
            <div ><p>
              {elem.name}

            </p>
            <img src={`${
              elem.image
            }`} alt="" />
            </div>
            </Link>
          )

          )
            
          
          }
          
      </div>
    </div>
  );
}

export default CompanyPage;
