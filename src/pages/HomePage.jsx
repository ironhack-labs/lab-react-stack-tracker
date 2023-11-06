import { Link } from "react-router-dom"

function HomePage({ companies }) {
    return (
        <div>
            <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
            <div className="home-page-list">
                {companies.map(company => {
                    return (
                        <Link to={`/company/${company.slug}`} key={company.id} className="home-page-link">
                            {company.name}
                            <img src={company.logo} alt={`${company.name} logo`} className="company-image" />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
  }

export default HomePage;
