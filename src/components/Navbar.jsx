import { Link } from "react-router-dom";

function Navbar() {
  return (
  <Link to={"/"}>
  <nav style={{color:"white"}}>StackTracker</nav>
  </Link>
  )
}

export default Navbar;
