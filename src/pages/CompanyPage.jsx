import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const company = companies.find(({ slug }) => companySlug === slug);

  return (
    <main>
      <div className="conteiner">
        <h1 className="title">Company Profile</h1>
        <div className="profile-wrapper">
          <div className="profile-img">
            <img
              width={200}
              height={200}
              src={company.logo}
              alt={company.name}
            />
          </div>
          <div className="profile-info">
            <h2>{company.name}</h2>
            <p>{company.website}</p>
            <p>{company.description}</p>
          </div>
        </div>
      </div>
      <ul className="company-list">
          {company.techStack.map((stack) => (
            <li className="company-item" key={stack.name}>
              <Link className="company-link" to={`/tech/${stack.slug}`}>
                <img
                  width={70}
                  height={70}
                  src={stack.image}
                  alt={stack.name}
                />
                {stack.name}
              </Link>
            </li>
          ))}
        </ul>
    </main>
  );
}

export default CompanyPage;
