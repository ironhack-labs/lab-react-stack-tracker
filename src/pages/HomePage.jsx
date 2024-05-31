import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

function HomePage(companies) {
  



  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companies.map(company => {
        return(
          <div key= {company.id}>
          <Link to={`/${company.slug}`}>
          <h2>{company.name}</h2> 
          <img src={company.logo} /> 
          </Link>

          </div>

        )

      })}

    </div>
  );
  
}

export default HomePage;
