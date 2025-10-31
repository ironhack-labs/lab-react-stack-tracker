import { Link } from "react-router-dom"

function HomePage({ companies }) {

  const homepageStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px",
  }

  const companiesUlStyle = {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "50px 150px"
  }

  const companiesLiStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
    width: "400px",
    padding: "40px",
    borderBottom: "solid #c3c0c0ff 2px"
  }

  return (
    <div style={homepageStyle}>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul style={companiesUlStyle}>
        {
          companies.map((company) => {
            return (
              <Link key={company.id} to={`/company/${company.slug}`}>
                <li style={companiesLiStyle}>
                  <h3 style={{ marginBottom: "50px" }}>{company.name}</h3>
                  <img src={company.logo} style={{ height: "120px" }} />
                </li>
              </Link>
            )
          }
          )}
      </ul>
    </div>
  );
}

export default HomePage;
