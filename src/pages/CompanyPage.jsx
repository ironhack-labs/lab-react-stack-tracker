import {Link, useParams} from 'react-router-dom'
import companiesData from './../companies.json'

import './CompanyPage.css'
import { useState } from 'react'


function CompanyPage() {

  const {companySlug} = useParams()
  const selectedCompany = companiesData.find(elm => elm.slug === companySlug)
  const [techStack, setTechStack] = useState(selectedCompany.techStack)

  return (
    <div className='CompanyPage'>
      <h2> Company profile </h2>

      <div className='companyDetails'>
        <img src={selectedCompany.logo} alt="" />
        <div className='companyInfo'>
          <h1>{selectedCompany.name}</h1>
          <h3>About</h3>
          <p>{selectedCompany.description} </p>
        </div>
      </div>

      <div className="techStack">
        {
          techStack.map(elm => {
            return(
              <div className="tech">
                <img src={elm.image} alt="" />
                <p> {elm.name} </p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default CompanyPage;
