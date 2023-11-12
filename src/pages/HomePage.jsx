import companies from "../companies.json"
import { Link } from "react-router-dom";


function HomePage(props) {
 
  return (

    <div>
      {
      companies.map(function(e, k){
          return(
            <div key={k}>
             
             <Link to={`/company/${e.slug}`}><img className = "logo" src={e.logo} alt="" />
             </Link> 
             <br/>
             {e.name}
             
            
            </div>
          )
        })
      }
            <li>
           
          </li>
    </div>
  );
}

export default HomePage;
