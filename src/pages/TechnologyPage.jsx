import { Link, useParams } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";

function TechnologyPage(props) {
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();

  const { technologies } = props;
  const { slug } = useParams();

  const companySlug = searchParams.get("company");

  const technologyToDisplay = technologies.find((technology) => {
    return technology.slug === slug;
  });

  function handleBack() {
    navigate(`/company/${companySlug}`);
  }

  return (
    <div>
      <h1 className="technology-details-headline">Technology Details</h1>
      {
        <div className="technology-container">
          <div className="technology-headline-image">
            <img src={technologyToDisplay.image} />
          </div>
          <h1>{technologyToDisplay.name}</h1>
          <h2 className="technology-about">About</h2>
          <p>{technologyToDisplay.description}</p>
          <button className="back-button" onClick={handleBack}>
            Back to Company
          </button>
        </div>
      }
    </div>
  );
}

export default TechnologyPage;
