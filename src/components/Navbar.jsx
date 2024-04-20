import Logo  from './Logo'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="container">
        <NavLink to="/">
          <Logo size="xs" hasText />
        </NavLink>
      </div>
    </nav>
    );
}

export default Navbar;