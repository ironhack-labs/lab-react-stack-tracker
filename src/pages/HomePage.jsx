import companies from "../companies.json";
import { useState } from "react";
import { Link } from "react-router-dom";
function HomePage() {
  const [cursor, setCursor] = useState("default");

  const handleMouseEnter = () => {
    setCursor("pointer");
  };

  const handleMouseLeave = () => {
    setCursor("default");
  };
  return (
    <div className="homepage">
      {companies.map((company) => (
        <Link
          key={company.id}
          className="company cursor-change"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor }}
          to={`/company/${company.slug}`}
        >
          <p>{company.name}</p>
          <img src={company.logo} alt="" width={"200px"} />
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
