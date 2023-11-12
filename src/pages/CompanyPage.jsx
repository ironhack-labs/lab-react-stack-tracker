import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();

  const selectedCompany = props.companiesList.find((company) => {
    return companySlug === company.slug;
  });

  return (
    <div>
      <h1>Company Profile</h1>
      <img src={selectedCompany.logo} className="logo"></img>
      <div>
        <h1>{selectedCompany.name}</h1>
        <p>About</p>
        <p>{selectedCompany.description}</p>
      </div>

      {selectedCompany.techStack.map((elm, i) => {
        return (
          <Link to={`/tech/${elm.slug}?${selectedCompany.slug}`} key={i}>
            <img src={elm.image} className="logo"></img>
            <p>{elm.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default CompanyPage;
