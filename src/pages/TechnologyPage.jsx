import { Link, useParams } from "react-router-dom";
import { useSearchParams, useNavigate } from 'react-router-dom';

function TechnologyPage(props) {

  let [searchParams] = useSearchParams();
  let navigate = useNavigate();

  const { technologies } = props;
  const { slug } = useParams();

  const companySlug = searchParams.get('company');


  const technologyToDisplay = technologies.find((technology) => {
    return technology.slug === slug;
  });

  function handleBack(){
    navigate(`/company/${companySlug}`);
  };

  

  return (
    <div>
      <h1>Technology Details</h1>
      {
        <div>
          <img src={technologyToDisplay.image} width="200px" />
          <h1>{technologyToDisplay.name}</h1>
          <h2>About</h2>
          <p>{technologyToDisplay.description}</p>
          <button onClick={handleBack}>Back to Company</button>
        </div>
      }
    </div>
  );
}

export default TechnologyPage;
