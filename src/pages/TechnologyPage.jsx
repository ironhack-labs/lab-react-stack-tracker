import { Link, useParams, useSearchParams } from "react-router";
import ProfileDetail from "../components/ProfileDetail";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const [search, setSearch] = useSearchParams();
  const company = search.get("company");

  const foundTech = technologies.find(tech => tech.slug === slug);


  if (!foundTech) {
    return <h3>Tech not found</h3>
  }
  
  return (
    <div className="technology-container main-container">
      <h1>Technology Details</h1>
      <ProfileDetail name={foundTech.name} logo={foundTech.image} description={foundTech.description} />
      <Link to={`/company/${company}`}><button className="tech-back-btn">Back</button></Link>
    </div>
  );
}

export default TechnologyPage;
