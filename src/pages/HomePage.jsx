import { Link } from 'react-router-dom'

function HomePage (props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {props.companies.map(company => {
        return (
          <Link to={`/company/${company.slug}`} key={company.id}>
            <div className='card'>
              <img src={company.logo} alt='' />
              <p>{company.name}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default HomePage
