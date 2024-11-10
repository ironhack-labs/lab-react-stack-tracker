import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="sidebar-link" to="/">
        <h1>StackTracker</h1>
      </NavLink>
    </nav>
  );
}

export default Navbar;
