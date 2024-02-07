import { useParams } from "react-router-dom";

function CompanyPage(props) {

  const {slug} = useParams();
  const companies = props.companies;

  const company = companies.find((company) => company.slug === slug);

  if (!company){
    return <div>No information found for this company</div>
  }

  return (
    <div className="CompanyPage">
      <h1>{company.name}</h1>
      <p>Website:{company.website}</p>
      <p>Description:{company.description}</p>
      <img src={company.logo} />
      <div>
        <ul>
          {company.techStack.map((tech) => (
            <li key={tech.slug}>
              <Link to={`/tech/${tech.slug}`}>
                <img src={tech.image} alt={`${tech.name} Logo`} />
                {tech.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
   
  
  );
}

export default CompanyPage;
