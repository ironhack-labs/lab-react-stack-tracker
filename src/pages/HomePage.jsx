import { Link } from "react-router-dom";

function HomePage({ companies }) {
  const styleCompDiv = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: "50px"
    
  }

  return (
    <div>
      <h1>SlackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div style={styleCompDiv} >
      {companies.map((company) => {
        return (
          <Link to={`/company/${company.slug}` } key={company.id} >
            <div >
              <h3>{company.name}</h3>
              <img src={company.logo} alt=""  className="logo" />
            </div>
          </Link>
        );
      })}
      </div>
    </div>
  );
}

export default HomePage;
