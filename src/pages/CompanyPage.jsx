import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function CompanyPage (props) {
  const { slug } = useParams()

  const companyInfo = props.companies.find(company => {
    return company.slug === slug
  })
  const [techs, setTechs] = useState(props.technologies)
  return (
    <div className='info'>
      <h1>Company Profile</h1>
      <div className=' company-card'>
        <img src={companyInfo.logo} alt='' />
        <div>
          <p>{companyInfo.name}</p>

          <p>{companyInfo.description}</p>
        </div>
      </div>
      <div className='tech-list'>
        {techs.map(tech => {
          return (
            <Link to={`/tech/${tech.slug}`} key={tech.id}>
              <div className='tech-details'>
                <img src={tech.image} alt='' />
              </div>
              <p>{tech.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CompanyPage
