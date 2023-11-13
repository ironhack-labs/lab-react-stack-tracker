import { Link } from "react-router-dom";

export function HomePage(props) {

  return (
    <>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="wrap">
        {props.companies.map((elm) => {
          return (
            <Link to={`/company/${elm.slug}`} key={elm.id}>
              <h2>{elm.name}</h2>
              <img className="logos" src={elm.logo} alt={elm.name} />
            </Link>
          )
        })}
      </div>
    </>
  );
}

export default HomePage;
