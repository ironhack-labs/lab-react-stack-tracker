import { NavLink } from "react-router-dom";
function Navbar() {
  return <nav className="Navbar">
 <ul>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/"
        >
          {" "}
          Home{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/company/:companySlug"
        >
          {" "}
          CompanyPage{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/tech/:slug"
        >
          {" "}
          TechnologyPage{" "}
        </NavLink>
      </ul>

  </nav>;
}

export default Navbar;
