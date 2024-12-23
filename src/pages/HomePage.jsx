import { Link } from "react-router-dom";

function HomePage(props) {
  // console.log(props.companies);
  const companies = props.companies;
  // console.log(companies);

  return (
    <div className="page-container">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companies-container">
        {companies.map((eachCompany) => {
          return (
            <Link to={`/company/${eachCompany.id}`} key={eachCompany.id}>
              <div className="each-company">
                <p>{eachCompany.name}</p>
                <img src={eachCompany.logo} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
