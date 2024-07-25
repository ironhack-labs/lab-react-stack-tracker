import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div className="HomePage">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul className="companies-container">
        {
          companies.map(company => {
            const { id, slug, name, logo } = company
            return (
              <li key={id} className="company-card">
                <Link to={`/company/${slug}`} >
                  <h2>{name}</h2>
                  <img src={logo} alt={name} />
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default HomePage;
