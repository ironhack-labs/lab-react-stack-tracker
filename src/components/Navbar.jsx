import { Link } from "react-router-dom";

function Navbar() {
  
  return <nav className="navbar">
    
    <Link to={'/'}><p className="navbar-link">StackTracker</p></Link>
    
    </nav>;
}

export default Navbar;
