import {Link} from 'react-router-dom'

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companies-container">
        {props.companies.map((oneCompany) => {
          return (
            <div key={oneCompany.id} className="company-row">
              <Link to={`/company/${oneCompany.id}`} className='company'>
                <h2>{oneCompany.name}</h2> 
                <img src={oneCompany.logo} alt="" width="150px" /></Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default HomePage;
