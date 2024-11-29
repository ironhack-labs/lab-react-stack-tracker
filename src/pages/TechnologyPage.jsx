import { Link, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage({technologies}) {
  const {slug} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("tech.slug === slug");
  
  const companySlug = searchParams.get("slug");  
  
  const technology = technologies.find((tech) => {
    console.log("tech.slug === slug", tech.slug, slug);
    return tech.slug === slug})
  console.log("technology", technology);
  
  
  return (
    <div>
      <h1>Technology Details</h1>
      {technology.name}
      {technology.image}
      {technology.description}
      <Link to={`/company/${companySlug}`}><button>Back</button></Link>
    </div>
  );
}

export default TechnologyPage;
