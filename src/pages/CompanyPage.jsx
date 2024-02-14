import { Link, useParams } from "react-router-dom";

function CompanyPage({companies, technologies}) {
  console.log(companies)
  console.log(technologies)

  const {companySlug} = useParams()

  const companyDetails = companies.find(company => company.id === companySlug);
  console.log(companyDetails)

  const companyTech = companyDetails.techStack
  console.log(companyTech)



  return (
    <div className="CompanyPage">
      <h1>Company Profile</h1>
      <div className="flex">
        <img src={companyDetails.logo} />
        <div className="block-container">
          <h2>{companyDetails.name}</h2>
          <p>About</p>
          <p>{companyDetails.description}</p>
        </div>
      </div>
      <div className="flex">
      {companyDetails.techStack.map((obj) => {
        return (
          <Link to={`/tech/${obj.slug}`}><div >
          <p><strong>{obj.name}</strong></p>
          <img className="logo-tech" src={obj.image}/>
          </div></Link>
        )
      })}
      </div>
    </div>
  );
}

export default CompanyPage;
