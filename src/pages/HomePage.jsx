/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
function HomePage(prop) {
const {companyArr} = prop

const companyMap = companyArr.map(company=>{
  const container = 
  <div className="company-card">
    <p>{company.name}</p>
    <img src={company.logo}/>
  </div>
  return <Link key={company.id} to={`/company/${company.slug}`}>{container}</Link>
})

return (
    <div className="home-container">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div id="company-container">
        {companyMap}
      </div>
    </div>
  );
}

export default HomePage;
