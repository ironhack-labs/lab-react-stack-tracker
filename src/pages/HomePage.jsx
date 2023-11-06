import { Link } from "react-router-dom";


function HomePage(props) {
  let {companies} = props;
  return (
    <div id="home-page">
      <div>
        <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      </div>
      <div id="company-grid">
        {companies.map((company)=>{
          return (
            <div id="company-card">
              <Link key={company.id} to={`/company/${company.slug}`}>
              {company.name}
              <img id="logo" src={company.logo} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default HomePage;
