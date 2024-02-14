import {Link} from "react-router-dom"

function HomePage(props) {
  console.log(props.companies[0])

  return (
    <div className="HomePage">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="container">
      {props.companies.map((obj) => {
        return ( 
          <Link to={`/company/${obj.slug}`}><div key={obj.id} className="company-card">
            <p><strong>{obj.name}</strong></p>
            <img src={obj.logo}/>
          </div></Link>
        )
      })}
      </div>
    </div>
  );
}

export default HomePage;
