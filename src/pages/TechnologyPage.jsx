import { useParams,  useSearchParams, Link } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();
  const [searchParams, setSearchParams ] = useSearchParams();
  
  const lastVisitedCompany = searchParams.get("company");


  const [technologyDetails] = props.technologiesArr.filter((tech, index) => {
    return tech.slug === slug;
  }); 

  return (
    <div>
      <h2>Technology Details</h2>

        <h3>{technologyDetails.name}</h3>
        <img src={technologyDetails.image} alt="technology image" />
        <p>{technologyDetails.description}</p>

        <Link to={`/company/${lastVisitedCompany}`} >
        <button>Back</button>
        </Link>
    </div>
  );
}

export default TechnologyPage;
