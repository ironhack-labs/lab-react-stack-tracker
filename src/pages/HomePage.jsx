import { Link } from "react-router-dom";

function HomePage(props) {
  let { companies } = props;
  return (
    <div className="title-container"><p><strong>StackTracker: Discover Tech Stacks Used by Top Companies</strong></p>
    
    <div className="content-container">{companies.map((company) => {
        return (
          <div key={company.id} className="card">
            <h3><strong>{company.name}</strong></h3>
            <h3>
              <Link to={`/company/${company.slug}`}>
                <img src={company.logo} className="logo-image" />
              </Link>
            </h3>
          </div>
        );
      })}
    </div>
    </div>
  );
  
}
export default HomePage;