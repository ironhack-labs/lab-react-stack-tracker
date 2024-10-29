import { Link } from "react-router-dom";
function HomePage(props) {
  return (
    <div className="home">
      {props.companies.map((company) => {
        return (
          <Link key={company.id} to={`company/${company.slug}`}>
            <li>{company.name}</li>
            <li>
              <img src={company.logo} />
            </li>
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
