import companiesData from './../companies.json'
import { useState } from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {

  const [companies, setCompanies] = useState(companiesData)

  return (
    <div className='HomePage'>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {
        companies.map(elm => {
          return (
            <Link to={`/company/${elm.slug} `} className='companyCard' >
              <div key={elm.id}>
                <img className='logo' src={elm.logo} alt="" />
                <h1>{elm.name} </h1>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default HomePage