import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return <nav>
    <Link to="/">
    <div className="logo">StackTraker</div>
    </Link>
  </nav>;
}

export default Navbar;
