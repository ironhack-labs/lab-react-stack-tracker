import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <>
      <header>
        <h1 className="blurb">Discover Tech Stacks Used by Top Companies</h1>
      </header>

      <div className="container">
      {props.companies.map((company) => {
        return (
            <div className="card" key={company.id}>
              <Link to={`/company/${company.slug}`}>
                <p className='link'>{company.name}</p>
              <img
                width={50}
                src={company.logo}
                alt="can't load company logo"
                />
                </Link>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default HomePage;
