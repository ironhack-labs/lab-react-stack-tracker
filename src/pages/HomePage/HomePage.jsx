/* eslint-disable react/prop-types */
/* import {Link} from 'react-router-dom'; */
import {Link} from 'react-router-dom';


  function HomePage(props) {
    let {companies} = props;
    /* let {technologies} = props;*/
  return (
    <div>
      <h1>HomePage</h1>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companies.map((company)=>{
        return(
          <div key={company.id} className="card">
            <h3>{company.name}</h3>
            <h3>
            <Link to={`/company/${company.slug}`}>
                <img src={company.logo} className="logo"/>
              </Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
