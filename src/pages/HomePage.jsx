import { Link } from 'react-router-dom';


function HomePage(props) {

  const companies = props.companies
  return (
    <div className='returned-div'>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className='comps-div'>
      {companies.map((company, index)=>{
        return(
          <div key={index}>
            <h2 className="comp-name">{company.name}</h2>
            <Link to={`company/${company.slug}`}>
            <img className="comp-logo" src={company.logo}/>
            </Link>
            </div>
        )
      })}</div>
    </div>
  );
}

export default HomePage;
