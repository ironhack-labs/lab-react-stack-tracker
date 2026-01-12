
import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const companyFiltered = companies.find((company) => company.slug === companySlug);
  return (
    <div className="container">
      <h1 className="mb-5 mt-5 text-center">Company Profile</h1>
      <div className="d-flex text-center justify-content-around">
        <img src={companyFiltered.logo} style={{width: '250px'}} />
        <div style={{width: '420px'}}>
          <div className="fs-1 fw-semibold">{companyFiltered.name}</div>
          <div className="fs-5 fw-semibold">About</div>
          <div className="fs-5">{companyFiltered.description}</div>
        </div>
      </div>
      {companyFiltered['techStack'].map((tech) => {
        return (
        <Link to={`/tech/${tech.slug}`} key={tech.name} 
              style={{textDecoration: 'none', color: "black", width:'150px', whiteSpace: "nowrap", overflowX: "auto"}}
              className="d-inline-block fw-semibold fs-5 text-center border-start border-end border-bottom ms-5">
          <img src={tech.image} style={{width: '50px'}} className="m-5" />
          <div>{tech.name}</div>
        </Link>)})}
    </div>
  );
}

export default CompanyPage;
