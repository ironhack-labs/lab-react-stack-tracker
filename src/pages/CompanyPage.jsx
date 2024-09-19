import { Link, useParams, useSearchParams } from "react-router-dom";

function CompanyPage({ companies }) {
  let { companySlug } = useParams();
  const companyProfile = companies.find(
    (currentSlug) => currentSlug.slug === companySlug
  );

  return (
    <>
      <h1 style={{ marginBottom: "3rem" }}>Company Profile</h1>
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
            src={companyProfile.logo}
            style={{
              width: "80%",
              height: "80%",
              objectFit: "contain",
            }}
          />
        </figure>
        <div style={{ width: "400px", padding: "1rem" }}>
          <h3 style={{ marginBottom: "0.8rem" }}>{companyProfile.name}</h3>
          <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            {companyProfile.description}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {companyProfile.techStack.map((item) => {
          return (
            <Link
              to={`/tech/${item.slug}?company=${companyProfile.slug}`}
              key={Math.random()}
              style={{ boxShadow: `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px` }}
            >
              <figure
                style={{
                  width: "100px",
                  height: "100px",
                  padding: "0.5rem",
                }}
              >
                <img
                  src={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </figure>
              <p>{item.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default CompanyPage;
