import companies from './../companies.json'
import { Link } from 'react-router-dom'

function HomePage() {



  return (
    <div className="HomePage">
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>
      {
        companies.map((company) => {
          return (
            <div key={company.id} className='companiesList'>
              <Link to={`/company/${company.slug}`} className='companyCard links'>
                <h3>{company.name}</h3>
                <img src={company.logo} alt={company.id} />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default HomePage
