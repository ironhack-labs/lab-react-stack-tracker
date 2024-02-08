import { useParams } from "react-router-dom";
import Compagnie from "../companies.json";
import { Link } from "react-router-dom"

function CompanyPage(props) {
  const paramObj = useParams();

  const companyObj = Compagnie.find((element) => element.slug == paramObj.CompanySlug);

  return (
    <>
      <div className="CompanyPage">
        <h1>Company Profile</h1>
      </div>
      <div className="CompanyPage-Main">
        <div className="CompanyPage-Presentation">
          <div className="CompanyPage-Presentation-ImgBox">
            <img src={companyObj.logo} alt="ComanyLogo" />
          </div>
          <div className="CompanyPage-Presentation-TxtBox">
            <h1>{companyObj.name}</h1>
            <h2>About</h2>
            <div className="CompanyPage-Presentation-TxtBoxP">
              <p>{companyObj.description}</p>
            </div>
          </div>
        </div>
        <div className="CompanyPage-TechList" key={companyObj.id}>
          {
            companyObj.techStack.map((element) => {
              return(
                <button onClick={() => {
                  console.log(companyObj.slug)
                  console.log(props)
                  props.setTechBackUrl(companyObj.slug)}
                  }>
                  <div className="CompanyPage-TechListBox">
                    <Link to={`/tech/${element.slug}`}>
                      <div className="CompanyPage-TechListBoxImg">
                        <img src={element.image} alt="TechImg" />
                      </div>
                      <h3>{element.name}</h3>
                    </Link>
                  </div>
                </button>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default CompanyPage;
