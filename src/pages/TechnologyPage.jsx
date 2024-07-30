import {Link, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom'
import {React} from 'react'

function TechnologyPage(props) {



  const techId = useParams().slug
  //console.log(techId)
  const techCompany = props.tech.filter((oneTech) => {
    return oneTech.name === techId
  })
  //console.log(techCompany)
  const searchParams = useSearchParams()
  console.log(searchParams)

  return (
    <>
      <h1>Technology Details</h1>

      <div className="techPageDiv">
        <img className="logoPicture" src={techCompany[0].image} alt="" />

        <div>
          <h1>{techCompany[0].name}</h1>
          <h2>About</h2>
          <p className="description">{techCompany[0].description}</p>
        </div>

      </div>
      
    </>
  );
}

export default TechnologyPage;
