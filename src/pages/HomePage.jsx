import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>

      {props.listOfCompanies.map(function(element){
        return (
          <>
          <ul>
            <li key={element.id}>{element.name} 
            
            </li>
            <li>
              <Link to={`/company/${element.slug}`}> <img src={element.logo} /></Link>
            </li>

          </ul>
          </>
        )
      })}
    </div>
  );
}

export default HomePage;
