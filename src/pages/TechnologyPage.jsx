/* eslint-disable no-unused-vars */
import { Link, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("tech.slug === slug");

  const companySlug = searchParams.get("slug");

  const technology = technologies.find((tech) => {
    console.log("tech.slug === slug", tech.slug, slug);
    return tech.slug === slug
  })
  console.log("technology", technology);


  return (
    <div>
      <h1 className="text-center my-5">Technology Details</h1>
      <div className="container mb-5 px-5 justify-content-around d-flex flex-row">
        <div className="p-5 col-4 border rounded border-black">
          <img width={"200xp"} src={technology.image} alt={technology.name} />
        </div>
        <div className="col-4">
          <h3 className="text-center mb-3 fs-1">{technology.name}</h3>
          <h4 className="text-center mb-2 fs-4">About</h4>
          <p className="text-center">{technology.description}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link to={`/company/${companySlug}`}>
          <button className="btn btn-primary px-4 fs-5 py-1">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default TechnologyPage;
