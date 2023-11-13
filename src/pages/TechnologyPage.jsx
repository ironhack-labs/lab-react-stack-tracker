import { Link, useParams, useSearchParams } from "react-router-dom";  


export function TechnologyPage(props) {


  const {techSlug} = useParams()

  const techDetails = props.technologies.find((elm) => {
    return elm.slug == techSlug
  })  

  const [searchParams] = useSearchParams();

  const previousCompanySlug = searchParams.get("company");

  console.log(previousCompanySlug)

  return (
    <>
    <div>
      <h3>Technology Details</h3>
      <h1>{techDetails.name}</h1>
      <p>{techDetails.description}</p>
      <img src={techDetails.image} alt={techDetails.name} />
    </div>

    {/* <a href={`/company/${previousCompanySlug}/`}>Go back</a> */}
    {/* <button onClick={() => navigate(`${previousCompanySlug}`)}>Go back</button> */}
    <Link to={`/company/${previousCompanySlug}/`}>Go back</Link>
    </>
  );
}

export default TechnologyPage;
