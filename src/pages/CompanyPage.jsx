import { Link, useParams } from "react-router-dom";


function CompanyPage(props) {

  // console.log(props);
  const companies = props.companies;
  // console.log(companies)

  const dynamicParams = useParams();
  // console.log(dynamicParams);
  // console.log(dynamicParams.companySlug)

  const foundCompany = companies.find((eachCompany) => {
    if(eachCompany.slug === dynamicParams.companySlug) {
      return true;
    } else {
      return false;
    }
  })

  // console.log(foundCompany)

  return (
    <div className="company-page">
      <h1>Company Profile</h1>
      <div className="company-info-container">
        <div className="image-container">
          <img src={foundCompany.logo}/>
        </div>
        <div className="info-section">
          <h2>{foundCompany.name}</h2>
          <h3>About</h3>
          <p>{foundCompany.description}</p>
        </div>
      </div>
      <div className="tech-stack-list">
        {foundCompany.techStack.map((eachTech) => {
          return(
          <Link to={`/tech/${eachTech.slug}?company=${foundCompany.slug}`} key={eachTech.name}>
            <div className="each-tech-stack">
              <img src={eachTech.image}/>
            </div>
              <h4>{eachTech.name}</h4>
          </Link>
          )
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
