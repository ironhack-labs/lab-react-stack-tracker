import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to={`/`}>
        <nav>StackTracker</nav>
      </Link>
    </div>
  );
}

export default Navbar;

