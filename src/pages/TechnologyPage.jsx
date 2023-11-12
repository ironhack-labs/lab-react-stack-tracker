import { Link, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage(props) {

  const { slug } = useParams()

  const stackDetails = props.technologiesArr.find((technology) => {
    return technology.slug === slug
  })

  const [searchParams, setSearchParams] = useSearchParams()

  const companySlug = searchParams.get('companySlug')
  console.log(companySlug)

  return (
    <div>
      <h1>Technology Details</h1>
      <div className="stack-info">
        <div>
          <img className="stack-info-image" src={stackDetails.image} />
        </div>
        <div className="stack-info-content">
          <h1>{stackDetails.name}</h1>
          <h2>About</h2>
          <p>{stackDetails.description}</p>
        </div>
      </div>
      <Link to={`/company/${companySlug}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage
