import { useLocation, useParams, useSearchParams, useNavigate } from "react-router-dom";

function TechnologyPage(props) {
  const { technologies } = props;
  const { slug } = useParams(); // we have defined the path(route) on App
  //as /tech/:slug and we want to store the last url on a variable using useParams
  // and that is why we use
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const companyName = searchParams.get("q");

  let foundTechnology = technologies.find((technology) => {
    return technology.slug === slug;
  });
  console.log(foundTechnology);
  console.log(slug);
  console.log(useParams);
  // useParams().slug === slug from the path /tech/:slug
  // useParams() {slug: slug } the key from ath /tech/:slug, is slug for useParams()
  return (
    <div>
      <h2>Technology Details</h2>
      {!foundTechnology && <h4>Technology not found</h4>}
      {foundTechnology && (
        <div>
          <div className="technology-details">
            <img className="technology-details-img" src={foundTechnology.image} alt="technology-image"></img>
            <div className="technology-details-description">
              <h1>{foundTechnology.name}</h1>
              <h4>About</h4>
              <p>{foundTechnology.description}</p>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => navigate(`/company/${companyName}`)}> back</button>
    </div>
  );
}

export default TechnologyPage;

/* {props.foundCompany.techStack.map((oneTechStack)=> {
        return (
          <div key={randomId()}>
          <Link to={`tech/${oneTechStack.slug}`}>
            <h4>{oneTechStack.name}</h4>
            <img src={oneTechStack.image} alt='TechStack image' width="150" ></img>
          </Link>
          </div>
        )
      })} */
