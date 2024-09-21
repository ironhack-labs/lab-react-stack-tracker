import { Link } from "react-router-dom";

function HomePage({data}) {
  return (
    <div id="home-page" className="flex-row">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {data.map((company)=>{
        return(
          <Link to={`/company/${company.slug}`}key={company.id}><img className="logo" src={company.logo} alt="company logo"/></Link>
        );
      })}
    </div>
  );
}

export default HomePage;
