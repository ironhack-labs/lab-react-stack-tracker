import { useParams, useSearchParams, Link } from "react-router-dom";

function TechnologyPage(props) {
  let {technologies} = props
  let {slug} = useParams();
  
  const [searchParams] = useSearchParams();
  const companySlug = searchParams.get("companySlug");

  const foundTech = technologies.find((oneTech)=>{
    return oneTech.slug === slug});

  return (
    <div>
      <div>
        <h1>Technology Details</h1>
      </div>
      {foundTech? <div id="info-card">
        <div>
          <img id="image" src={foundTech.image} />
        </div>
        <div id="card-information">
          <h2>{foundTech.name}</h2>
          <h3>About</h3>
          <p>{foundTech.description}</p>
        </div>
        <button>
        <Link to={`/company/${companySlug}`}>Back</Link>
        </button>
      </div>: 'Bad luck'}
    </div>
  )
}

export default TechnologyPage;
