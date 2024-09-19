import { Link } from "react-router-dom";

function Navbar() {
  return  (
  
    <nav>
      <p>StackTracker</p>

      <Link to="/">Home</Link>
      <Link to="/company/:companySlug">Company</Link>
      <Link to="/technology/:slug">Tech</Link>
      
    </nav>
  )
}

export default Navbar;
