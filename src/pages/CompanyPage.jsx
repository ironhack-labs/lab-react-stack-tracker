import { useParams, Route, Routes, Link} from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();

  // console.log(props.companiesArr)
  // console.log(companySlug)
  const [companyMatch] = props.companiesArr.filter((company) => {
    return company.slug === companySlug;
  });
  // console.log(companyMatch.techStack); // array with objects

  return (
    <>
      <div className="card">
        <h2>Company Profile</h2>
        <div className="box">
          <img className="logo" src={companyMatch.logo} alt="" />
          <div className="info">
            <h2>{companySlug.toLocaleUpperCase()}</h2>
            <h3>About</h3>
            <p>{companyMatch.description}</p>
            <a href={companyMatch.website}>Visit website</a>  
          </div>
        </div>
      </div>

      <ul className="techStack">
        {companyMatch.techStack.map((tech, index) => (
          <Link to ={`/tech/${tech.slug}?company=${companySlug}`} key={index}>
            <li className="logo" >
              <h2>{tech.name}</h2>
              <img src={tech.image} alt="tech image" className="logo" />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default CompanyPage;
