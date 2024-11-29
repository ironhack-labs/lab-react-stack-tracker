import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div className="mt-5 container d-flex flex-column">
      <h1 className="fs-2 mb-5 text-center">StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="container d-flex flex-row gap-5 flex-wrap">
        {companies.map(company => (
          <div key={company.id} className="container d-flex gap-5 justify-content-center align-items-center p-5 flex-column col-4 border borde-black">
            <Link className="text-decoration-none" to={`/company/${company.slug}`}>
              <div className="mb-4 text-center fs-4  text-black fw-bolder">{company.name}</div>
              <div>
                <img width="100px" src={company.logo} alt={company.name} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
