
import "../App.css"
import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {
  const {companySlug} = useParams()
  // console.log(props.comp[0].slug)
  // console.log(companySlug)
  const compDetail = props.comp.find((elem)=>elem.slug === companySlug)
  // console.log(compDetail)

  return (
    <div className="super-container">
      <div id="comp-detail-container">
        <h1>Company Profile</h1>
        <div className="ficha-company-detail">
          <div className="company-detail-img-container">
            <img src={compDetail.logo} alt="" />
          </div>
          <div className="company-detail-text-container">
            <h3>{compDetail.name}</h3>
            <h4>About</h4>
            <p>{compDetail.description}</p>
          </div>
        </div>
      </div>
      <div id="comp-technologies-container">
          {compDetail.techStack.map((elem)=>{
            return (
              <Link key = {elem.slug} to={`/tech/${elem.slug}?previous=${companySlug}`}>
                <div className="card-comp-tech" >
                  <div className="ficha-comp-tech">
                    <div className="comp-tech-img">
                      <img src={elem.image} alt="" />
                    </div>
                  </div>
                  <h4>{elem.name}</h4>
                </div>
            </Link>
            )
          })}
      </div>
    </div>
  );
}

export default CompanyPage;
