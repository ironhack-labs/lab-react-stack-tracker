import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" >
        <h2 id="home-button">StackTracker</h2>
      </Link>
    </nav>
  );
}

export default Navbar;
