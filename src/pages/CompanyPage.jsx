import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {
  const params = useParams();
  const companySlug = params.companySlug;

  // Buscar la compañía correspondiente por su slug
  const filteredCompanies = props.allCompanies.filter((eachCompany) => {
    return eachCompany.slug === companySlug;
  });
  console.log(filteredCompanies);

  const eachCompany = filteredCompanies[0];

  return (
    <div>
      <div className={"c-and-t-pages"}>
        <div>
          <img src={eachCompany.logo} alt="logo" width="150px" />
        </div>
        <div>
          <h3>{eachCompany.name}</h3>
          <p>About</p>
          <p>{eachCompany.description}</p>
        </div>
      </div>
        <div className={"techs"}>
          {eachCompany.techStack.map((eachTechnology) => {
            return (
              <Link to={`/tech/${eachTechnology.slug}?${eachTechnology.slug}`} key={eachTechnology.slug}>
              <li >
                <img src={eachTechnology.image} alt="logoTech" width="100px" />
                {eachTechnology.name}
              </li>
              </Link>
            );
          })}
        </div>
      
    </div>
  );
}

export default CompanyPage;
