import { Link } from "react-router-dom";

function Navbar() {
  return <nav>
    <Link to={`/`}>StackTracker</Link>
  </nav>;
}

export default Navbar;
