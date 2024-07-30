
import { Link, NavLink } from "react-router-dom";


function Navbar() {

  return (
  <nav className= "nav-bar" >
<ul>

          <NavLink to="/" className="nav-link"> Home </NavLink>
          <NavLink to="/company" className="nav-link"> Company </NavLink>
          <NavLink to="/technology" className="nav-link"> Technology </NavLink>
</ul>
  </nav>
  )
}

export default Navbar;
