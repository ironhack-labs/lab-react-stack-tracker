import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <main>
      <div className="conteiner">
        <h1 className="title">
          StackTracker: Discover Tech Stacks Used by Top Companies
        </h1>
        <ul className="home-list">
          {companies.map((company) => (
            <li className="home-item" key={company.id}>
              <Link className="home-link" to={`/company/${company.slug}`}>
                <img
                  width={150}
                  height={150}
                  src={company.logo}
                  alt={company.name}
                />
                {company.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default HomePage;
