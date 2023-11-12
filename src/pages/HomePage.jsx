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
            <img src={element.logo} />
            </li>
            <Link to={`./company/${element.slug}`}>More details</Link>
          </ul>
          </>
        )
      })}
    </div>
  );
}

export default HomePage;
