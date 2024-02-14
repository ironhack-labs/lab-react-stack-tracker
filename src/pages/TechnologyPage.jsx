import { Link, useParams, useNavigate, useSearchParams  } from "react-router-dom";

function TechnologyPage({technologies}) {

  const {slug} = useParams()

  const technologyDetails = technologies.find(technology => technology.slug === slug);
  console.log(technologyDetails)

  const [searchParams] = useSearchParams()
  const currentCompanySlug = searchParams.get("companyName");
  // const navigate = useNavigate(); 
  

  return (
    <div>
      <h1 className="TechnologyPage">Technology Details</h1>
      <div className="flex">
        <img src={technologyDetails.image} />
        <div className="block-container">
          <h2>{technologyDetails.name}</h2>
          <p>About</p>
          <p>{technologyDetails.description}</p>
        </div>
      </div>
      <Link to={`/company/${currentCompanySlug}`}><button>Back</button></Link>
      {/* <button onClick={() => navigate(-1)}>Back</button> */}
    </div>
  );
}

export default TechnologyPage;
