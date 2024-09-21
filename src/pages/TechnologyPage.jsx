import { useParams, useSearchParams, Link } from "react-router-dom";

function TechnologyPage({ technologies }) {

  const { techSlug } = useParams()
  // adding the visited company slug from the query param passed from CompanyPage
  // using searchParams to get it 
  const [searchParams] = useSearchParams()


  const companySlug = searchParams.get("company")

  // console.log(techSlug);
  // console.log(technologies)

  const techToDisplay = technologies.find((tech) => tech.slug === techSlug)

  if (!techToDisplay) {
    return <p>tech not foudn</p>
  }


  return (
    <div className="tech-stack-container">
      <img src={techToDisplay.image} />
      <p>{techToDisplay.name}</p>
      <p>{techToDisplay.description}</p>

      {/* back-btn to navigate to the previous company page using the query param shared before */}
      <Link to={`/company/${companySlug}`}>
        <button>back to {companySlug} page</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
