import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className="Navbar">

      <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
      
        <nav>StackTracker</nav>

      </NavLink>

    </div>
  )
}

export default Navbar
