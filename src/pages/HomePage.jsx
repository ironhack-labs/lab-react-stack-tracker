import { Link } from "react-router-dom";

function HomePage({ companies }) {

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: '2rem',
          gap: '1rem'
        }}
      >
        {companies.map((currentCompany) => {
          return (
            <Link to={`company/${currentCompany.slug}`}
              key={currentCompany.id}
              style={{
                width: "400px",
                padding: "1rem",
                boxShadow: `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`
              }}
            >
              <p style={{marginBottom: '1rem'}}>{currentCompany.name}</p>
              <figure
                style={{ height: "200px" }}
              >
                <img
                  src={currentCompany.logo}
                  style={{
                    width: "80%",
                    height: "80%",
                    objectFit: "contain",
                  }}
                />
              </figure>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
