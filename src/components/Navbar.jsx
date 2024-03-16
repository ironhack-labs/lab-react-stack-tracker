import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="nav-style">
      <div className="conteiner">
      <Link to='/' className="header-link">StackTracker</Link>
      </div>
    </header>
  ) 
  
}

export default Navbar;
