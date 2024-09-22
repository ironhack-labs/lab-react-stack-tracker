import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function TechnologyPage({technologies}) {
  let {tech} = useParams()
  let [searchParams] = useSearchParams();

  const companySlug = searchParams.get('company');

  const techData = technologies.find((eachTech) => {
    return eachTech.slug === tech
  })
  
  return (

    <div>
      <h1>Technology Details</h1>

      <div className="card">
        <h3>{techData.name}</h3>
        <img className="logo" src={techData.image} alt="logo" />
        <p>{techData.description}</p>
      </div>

      <Link to={`/company/${companySlug}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
