import { useParams, useSearchParams, useNavigate } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const technology = technologies.find((t) => t.slug === slug);

  const handleBack = () => {
    const companySlug = searchParams.get("company");
    navigate(companySlug ? `/company/${companySlug}` : "/");
  };

  return (
    <div>
      <h1>Technology Details</h1>
      {technology ? (
        <section className="profile">
          <img src={technology.image} alt={technology.name} className="profile-logo" />
          <div className="profile-info">
            <h2>{technology.name}</h2>
            <p>{technology.description}</p>
          </div>
        </section>
      ) : (
        <p>Technology not found.</p>
      )}
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default TechnologyPage;
