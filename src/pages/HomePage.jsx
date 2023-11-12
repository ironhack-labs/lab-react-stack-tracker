import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>{props.loadCompanies()}</ul>
    </div>
  );
}

export default HomePage;
