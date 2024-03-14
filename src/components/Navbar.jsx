//import { NavLink } from "react-router-dom";
function Navbar() {
  return <nav style={{ backgroundColor: 'violet' }}>
    {
      <h1 style={{ padding: "20px" }}>Stack Tracker</h1>
      /* <ul>

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

    </ul>  */
    } </nav>;
}

export default Navbar;
