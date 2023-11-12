import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();
  const companySlug = useSearchParams();

  const queryParam = companySlug.values().next().value;

  console.log(companySlug[0]);

  const selectedTech = props.techList.find((elem) => {
    return elem.slug === slug;
  });

  return (
    <div>
      <h1>Technology Details</h1>
      <div>
        <img src={selectedTech.image}></img>
        <div>
          <h1>{selectedTech.name}</h1>
          <p>About</p>
          <p>{selectedTech.description}</p>
        </div>
      </div>
      <Link to={`/company/${queryParam}`}>
        <button></button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
