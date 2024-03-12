import { NavLink } from "react-router-dom";
function Navbar() {
  return <nav style={{ backgroundColor: 'violet' }}>
    <ul>

      <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
        Home
      </NavLink>

      <NavLink
        to="/company/:companySlug"
        className={({ isActive }) => isActive ? "selected" : ""}
      >
        companies
      </NavLink>

      <NavLink
        to="/tech/:techSlug"
        className={({ isActive }) => isActive ? "selected" : ""}
      >
        technologies
      </NavLink>

    </ul>  </nav>;
}

export default Navbar;
