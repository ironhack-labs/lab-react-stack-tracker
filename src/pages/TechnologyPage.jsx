import { useParams, Link } from "react-router-dom";

function TechnologyPage({ technologiesArr }) {
  const { companySlug, slug } = useParams(); // Obtener ambos parámetros de la URL

  const technologyToDisplay = technologiesArr.find((tech) => tech.slug === slug);

  if (!technologyToDisplay) {
    return <h1>Tech not found 😭</h1>;
  }

  return (
    <div className="page">
      <h2>Detalles de la Tecnología</h2>
      <header>
        <div className="companyCardLogo">
          <img src={technologyToDisplay.image} alt={technologyToDisplay.name} />
        </div>

        <section style={{ width: "500px", textAlign: "center" }}>
          <h1>{technologyToDisplay.name}</h1>
          <p>{technologyToDisplay.description}</p>
        </section>
      </header>

      <Link to={`/company/${companySlug}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
