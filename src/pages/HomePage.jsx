
import { Link} from "react-router-dom";

function HomePage(props) {


  return (
    <div>
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>
      {/* <CompanyList companyList={props.companiesArr} /> */}

      <ul >
        {props.companiesArr.map((company, index) => {
            {console.log(company.logo)}
          return (
              <li
              key={company.id}>
              <Link to={`/CompanyPage/${company.slur}`}>To Company</Link>
              <p>{company.name}</p>
              <img className="logo" src={`${company.logo}`} alt="" />
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
