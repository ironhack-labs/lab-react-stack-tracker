import { useParams, useSearchParams } from "react-router-dom";

function TechnologyPage(props) {
  const { technologies } = props;
  const { slug } = useParams();

  // stopped here ***
  // let [searchParams, setSearchParams] = useSearchParams();

  const technologyToDisplay = technologies.find((technology) => {
    return technology.slug === slug;
  });

  // stopped here ***
  function handleButtonEvent(event) {
    event.preventDefault();
    // setSearchParams("test");
  }

  return (
    <div>
      <h1>Technology Details</h1>
      {
        <div>
          <img src={technologyToDisplay.image} width="200px" />
          <h1>{technologyToDisplay.name}</h1>
          <h2>About</h2>
          <p>{technologyToDisplay.description}</p>
          <button onClick={handleButtonEvent}>Back</button>
        </div>
      }
    </div>
  );
}

export default TechnologyPage;
