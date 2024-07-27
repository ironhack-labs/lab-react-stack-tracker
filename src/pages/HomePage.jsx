


import { Link } from 'react-router-dom'

function HomePage({companies}) {

  return (
    <div className='homepage-div'>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companies.map((oneCompany) => {
        return (
          <Link key={oneCompany.id} to={`/company/${oneCompany.slug}`} >
            <div className='one-company-div'>
              <h3>{oneCompany.name}</h3>
              <img src={oneCompany.logo} alt={oneCompany.name}/>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default HomePage;
