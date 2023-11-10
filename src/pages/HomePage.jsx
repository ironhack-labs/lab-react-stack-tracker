import { Link } from "react-router-dom";

function HomePage(props) {

  return (

    props.companiesArr.map((company, i, arr) => {

      return (
        <Link to={`./company/${company.slug}`}>
          <div className="company-container">
              <p className="company-name">{company.name}</p>
              <img src={company.logo} />
          </div>
        </Link>

      )
    })
  )
}

export default HomePage;
