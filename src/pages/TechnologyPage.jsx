import { Link, useParams, useSearchParams } from "react-router-dom";


function TechnologyPage(props) {

  const params = useParams()
  const [searchParams] = useSearchParams();


  const {technologiesData} = props;

  const technologyFiltered = technologiesData.filter((eachTechnology) => {
    if (eachTechnology.slug === params.slug) {
      return true
    } else {
      return false
    }
  })

  const technologyFound = technologyFiltered[0]

  // console.log(technologiesData)

  const from = searchParams.get("from");


  return (

    <div>
      <img src={technologyFound.image} alt="logo" width={"90px"} />
      <h1>{technologyFound.name}</h1>
      <Link to={from || "/"}>
        <button>
          Back
        </button>
      </Link>
      <p>{technologyFound.description}</p>
    </div>
      
    
  );
}

export default TechnologyPage;
