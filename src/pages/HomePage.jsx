import { Link } from "react-router-dom";
import CompanyPage from "./CompanyPage";


function HomePage(props) {
 
 
  // console.log(props.companiesData);

  return (
    <div>
      <h1>
        StackTracker: descubra las pilas tecnológicas utilizadas por las
        principales empresas
      </h1>
      
        {props.companiesData.map((eachCompany) => {
          return (
            <article key={eachCompany.id}>
            <p >{eachCompany.name}</p>
            <Link to={`/company/${eachCompany.slug}`}>
            <img src={eachCompany.logo} alt="logo" width={"120px"} />
            </Link>
            
            <hr />
          </article>
          )
          
        })}
      
    </div>
  );
}

export default HomePage;
