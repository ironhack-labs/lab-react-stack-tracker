import { Link, useParams } from "react-router";

function CompanyPage({companies}) {
  const {companyId} = useParams();

  const company = companies.find((company)=>company.id === companyId)

    if (!company) {
    return (
      <div className="detail-container not-found-container">
        <h1>Recipe Not Found</h1>
        
        <Link to="/" className="back-to-list-link">
          Back to the list.
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2>Company Profile</h2>
      <section className="details-container">
        <article className="image-container">
          <img src={company.logo} alt="logo" />
        </article>
        <article className="text-details"> 
          <h3>{company.name}</h3>
          <h4>About</h4>
          <p>{company.description}</p>
        </article>
      </section>

      <section >
      <ul id="hor-list">
        {companies.map((company) => (
          <li key={company.id}>
            <Link to={`/tech/${company.id}`}>
              <img src={company.logo} alt={company.name} />
              {company.name}
            </Link>
          </li>
        ))}
      </ul>
      </section>

    </>
  );
}

export default CompanyPage;
