import { Link } from "react-router"

function CompanyTech({ techStack: { name, slug, image }, companySlug }) {
  return (
    <Link className="company-tech-container" to={`/tech/${slug}?company=${companySlug}`}>
      <div className="tech-logo-container">
        <img src={image} alt={name + " logo"} />
      </div>
      <h3>{name}</h3>
    </Link>
  )
}
export default CompanyTech