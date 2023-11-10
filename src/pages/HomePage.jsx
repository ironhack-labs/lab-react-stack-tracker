import { Link } from 'react-router-dom';

function HomePage(props) {

  return (
    <div className='home-page'>
      <h1 className='home-page-title'>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

      <ul className='companies-list' role='list'>
        {props.companies.map((company) => {
          return (
            <li key={company.id} className='company-card'>
              <Link to={`/company/${company.slug}`}>
                <p className='company-name'>{company.name}</p>

                <br />
                <img src={company.logo} alt="Company image" className='logo' />
              </Link>

            </li>

          )
        })}
      </ul>
    </div>
  );
}

export default HomePage;
