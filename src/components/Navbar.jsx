import { Link } from "react-router-dom";

function Navbar() {
  return(
        <nav id="navbar">
                <ul>
                    <Link to="/">Home </Link>
                    <Link to="/company">Company Profile </Link>
                    <Link to="/technology">Technology Details</Link>
                </ul>
        </nav>
    )
}

export default Navbar

