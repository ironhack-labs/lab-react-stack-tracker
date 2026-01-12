
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return <nav 
          className="align-content-center ps-4 fs-5 fw-semibold"
          onClick={() => navigate("/")}
          style={{backgroundColor: '#656dff', height: '75px', color: '#ffffff', cursor: 'pointer'}}>StackTracker</nav>;
}

export default Navbar;
