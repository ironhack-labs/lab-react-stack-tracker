import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <>
      <header>
        <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      </header>

      {props.companies.map((company) => {
        return (
          <>
            <div key={company.id}>
              <Link to={`/company/${company.slug}`}>
              <p>{company.name}</p>
              <img
                width={50}
                src={company.logo}
                alt="can't load company logo"
                />
                </Link>
            </div>
          </>
        );
      })}
    </>
  );
}

export default HomePage;
