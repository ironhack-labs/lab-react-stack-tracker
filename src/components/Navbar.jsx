import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="Navbar">

      <Link to={'/'}><h2>StackTracker</h2></Link>

    </nav>

  )
}

export default Navbar;
