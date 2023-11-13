import { useParams } from "react-router-dom";

function CompanyPage({company}) {

  const {companySlug} = useParams();

  const EleCompany = company.filter((company)=>company.slug === companySlug)
  console.log(EleCompany[0].name)
  return (
    <div className="companyPage">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h2 className="card-title">{EleCompany[0].name}</h2>
        </div>
        <img
          className="card-img-top"
          src={EleCompany[0].logo}
          alt="Card image cap"
        />
      </div>
      <div className="card" style={{width: '50rem'}}>
 
      <div className="card-body">
        <h2 className="card-title">{EleCompany[0].name}</h2>
        <p className="card-text">{EleCompany[0].description}</p>
      </div>
    </div>

    </div>
  );
}

export default CompanyPage;
