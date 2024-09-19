import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#646cff",
        padding: "1rem",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1.5rem",
      }}
    >
      <Link to="/" style={{color: '#fff'}}>StackTracker</Link>
    </nav>
  );
}

export default Navbar;
