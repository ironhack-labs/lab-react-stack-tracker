import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="nav">
      <NavLink to ="/"><p>StackTracker</p></NavLink>
    </nav>
  )
}

export default Navbar;
