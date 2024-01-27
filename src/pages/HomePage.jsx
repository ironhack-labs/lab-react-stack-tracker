import {Link} from 'react-router-dom'

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {props.companies.map((oneCompany) => {
        return (
          <div key={oneCompany.id}>
            <Link to={`/company/${oneCompany.id}`}>{oneCompany.name} <img src={oneCompany.logo} alt="" width="100px" /></Link>
          </div>
        )
      })}
    </div>
  );
}

export default HomePage;
