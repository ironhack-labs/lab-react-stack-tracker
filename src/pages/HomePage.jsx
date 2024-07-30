import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function HomePage({ companies }) {
  return (
    <div>
      <Navbar></Navbar>

      <h1 className="title">StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companies-container">
        {companies.map((company) => {
          return (
            <Link className="company" key={company.id} to={`/company/${company.slug}`}>
              <h2>{company.name}</h2>
              <img className='company-image'src={company.logo} style={{ height: '80px' }}  alt="" />
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default HomePage;

