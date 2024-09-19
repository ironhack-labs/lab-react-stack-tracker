import { Link } from 'react-router-dom';

function HomePage({companiesArr}) {
  return (
    <div className="page">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <section className="companyList">
        {companiesArr.map((company, index) => (
          <Link to={`/company/${company.slug}`} className="companyCard" key={index}>
            <h4>{company.name}</h4>
            <img className="companyLogo" src={company.logo} alt={company.name} />
        </Link>
          ))}
      </section>
    </div>
  );
}

export default HomePage;
