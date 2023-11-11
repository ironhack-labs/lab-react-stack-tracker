import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="navbar-link">
        StackTracker
      </Link>
    </nav>
  );
}

export default Navbar;
