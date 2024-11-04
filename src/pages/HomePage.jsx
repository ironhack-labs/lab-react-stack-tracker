import { Link } from "react-router-dom";
import { CompanyCard } from "../components/CompanyCard";

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="compList">
        {companies.map((e) => (
          <Link key={e.id} to={`/company/${e.slug}`}>
            <CompanyCard company={e} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
