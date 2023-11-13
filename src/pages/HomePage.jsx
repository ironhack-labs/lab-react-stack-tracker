import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <>
      <div>
        <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      </div>
        {props.companies.map((aCompany) => {
          return (
            <>
            <div key={aCompany.id}>
              <Link to={`/aCompany/${aCompany.slug}`}></Link>
              <p>{aCompany.name}</p>
              <img width={50} src={aCompany.logo} alt="can't load company logo" />
      </div>
            </>
          );
        })}
    </>
  );
}

export default HomePage;
