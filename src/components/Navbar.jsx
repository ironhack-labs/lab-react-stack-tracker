import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h3>StackTracker</h3>
      </Link>
    </nav>
  );
}

export default Navbar;
