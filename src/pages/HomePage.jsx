import { Link} from "react-router-dom";

function HomePage(props) {


  return (
    <div>
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>
      {/* <CompanyList companyList={props.companiesArr} /> */}

      <ul className="box">
        {props.companiesArr.map((company, index) => {
            // {console.log(company.logo)}
          return (
              <li className="li-item"
              key={company.id}>
              <Link to={`/company/${company.slug}`}>
              <p>{company.name}</p>
              <img className="logo" src={`${company.logo}`} alt="" />
              </Link>
            </li>

            //   <CompanySumary
            //     companyDetails = {company}
            //   />
          );
        })}
      </ul>

    </div>
  );
}

export default HomePage;
