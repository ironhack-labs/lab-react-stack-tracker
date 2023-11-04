import { Link } from "react-router-dom";

function HomePage(props) {
  let {companies} = props
  return (
    <div>
      <h1>HomePage</h1>
      {companies.map((company)=>{
        return( 
        <div key={company.id} className="companyId">
          <img className="logo" src={company.logo} alt="" >
            </img>
          <h3><Link to={`/companies/${company.id}`}>{company.name}</Link></h3>
        </div>
        )
      })}
    </div>
  );
}

export default HomePage;
