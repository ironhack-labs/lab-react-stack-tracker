import './HomePage.css'

import companiesData from './../../../src/companies.json'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="homepage-container">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

      <div className="companies-grid">
        {
          companiesData.map((company) => {
            return (
              <Link to={`/company/${company.slug}`} className="company-link" key={company.slug}>
                <div className="company">
                  <img src={company.logo} alt="logo" />
                  <h3>{company.name}</h3>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomePage