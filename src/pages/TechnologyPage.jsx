import { useNavigate, useParams, useSearchParams } from "react-router-dom";  


export function TechnologyPage(props) {


  const {techSlug} = useParams()

  const techDetails = props.technologies.find((elm) => {
    return elm.slug == techSlug
  })  

  const { navigate } = useNavigate();
  const [searchParams] = useSearchParams();

  const previousCompanySlug = searchParams.get("company");


  return (
    <>
    <div>
      <h3>Technology Details</h3>
      <h1>{techDetails.name}</h1>
      <p>{techDetails.description}</p>
      <img src={techDetails.image} alt={techDetails.name} />
    </div>

    <button onClick={() => navigate(`/company/${previousCompanySlug}`)}>Go back</button>

    </>
  );
}

export default TechnologyPage;
