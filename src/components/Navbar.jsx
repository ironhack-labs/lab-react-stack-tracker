import { Link } from "react-router-dom"

function Navbar() {
    return (
      <>
        <nav>
            <Link to="/" id="nav-link">StackTracker</Link>
        </nav>
      </>
    )
}

export default Navbar
