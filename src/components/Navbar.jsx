import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        StackTracker
      </Link>
    </nav>
  );
}

export default Navbar;
