import { useParams, useSearchParams, Link } from "react-router-dom";
import PropTypes from "prop-types";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const [queryString] = useSearchParams();
  const companySlug = queryString.get("companySlug");
  const technology = technologies.find((technology) => {
    return technology.slug === slug;
  });
  return (
    <div key={technology.id} className="technology">
      <Link to={`/company/${companySlug}`}>Back</Link>
      <h1>{technology.name}</h1>
      <p>{technology.description}</p>
      <img src={technology.image} />
    </div>
  );
}

TechnologyPage.propTypes = {
  technologies: PropTypes.array.isRequired,
};

export default TechnologyPage;
