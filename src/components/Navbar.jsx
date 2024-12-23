import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/"><p>StackTracker</p></Link>
    </nav>
  );
}

export default Navbar;
