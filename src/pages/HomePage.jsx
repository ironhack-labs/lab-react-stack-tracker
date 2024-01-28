import {Link} from "react-router-dom"
function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

 {props.companies.map((eachCompany)=>{
return(
  <div>
 <Link to={"/"}>{eachCompany.name}</Link>
 <Link to={"/"}>{eachCompany.logo}</Link>
 </div>
)

})}
    </div>
  );
}

export default HomePage;
