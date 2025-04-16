import { Link } from "react-router-dom";

function ErrorPage() {
    return (
      <div>
        <h1>Page not found</h1>
        <div>Please go to <Link to="/">Home Page</Link></div>
      </div>
    );
  }
  
  export default ErrorPage;