
import { Link, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const technology = technologies.find(
    (currentTechnology) => currentTechnology.slug === slug
  );

  const [searchParams] = useSearchParams();
  const companySlug = searchParams.get('company')

  return (
    <div>
      <h1 style={{ margin: "2rem 0" }}>Technology Details</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "space-evenly",
          marginBottom: "4rem",
        }}
      >
        <figure
          style={{
            width: "300px",
            height: "200px",
            padding: "1.5rem",
            boxShadow: `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`,
          }}
        >
          <img
            src={technology.image}
            style={{
              width: "80%",
              height: "80%",
              objectFit: "contain",
            }}
          />
        </figure>
        <div style={{ width: "400px", padding: "1rem", position: "relative" }}>
          <h3 style={{ marginBottom: "0.8rem" }}>{technology.name}</h3>
          <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            {technology.description}
          </p>
          <Link
          to={`/company/${companySlug}`}
            style={{
              position: "absolute",
              bottom: "0px",
              left: '173px',
              padding: "0.5rem",
              cursor: "pointer",
              border: "1px solid #8080802e",
              backgroundColor: "#8080802e",
            }}
            type="button"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
