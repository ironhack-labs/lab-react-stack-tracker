import { Link, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage(props) {
  const params = useParams();
  const technologySlug = params.slug;
  const [searchParams, setSearchParams] = useSearchParams()
  //console.log (params)
  console.log(searchParams)
  const filteredTechnologies = props.allTechnologies.filter(
    (eachTechnology) => {
      return eachTechnology.slug === technologySlug;
    }
  );
  //console.log(filteredTechnologies);
  const eachTechnology = filteredTechnologies[0];
  //console.log(eachTechnology)


  return (
    <div>
      <div className={"c-and-t-pages"}>
        <div>
          <img src={eachTechnology.image} alt="logo" width="150px" />
        </div>
        <div>
          <h3>{eachTechnology.name}</h3>
          <p>About</p>
          <p>{eachTechnology.description}</p>
        </div>
      </div>
      <Link to={""}>
      <button>Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
