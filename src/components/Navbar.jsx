import { Link } from "react-router-dom"


function Navbar() {
  return <nav> 
    <div className="nav">
    StackTracker
    </div>
        <div className="nav2">
          <ul className="nav3">
            <Link to="/">  Home  </Link>
            <Link to="/technology">  Technology  </Link>
            <Link to="/company">  Company  </Link>
        </ul>
        </div>
        </nav>;
}

export default Navbar;
