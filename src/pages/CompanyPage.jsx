import { useParams } from "react-router-dom"
import companies from '../companies.json'


function CompanyPage() {

  const { companySlug } = useParams()

  const foundCompany = companies.find((company) => {
    return company.slug === companySlug
  })

  return (
    <div className="CompanyPage">
      <article className="card">
        <section>
          <h4 className="cardName">{foundCompany.slug}</h4>
          <p className="cardWebsite">{foundCompany.website}</p>
          <p className="cardDescription">{foundCompany.description}</p>
          <ul className="techStackList">
            {foundCompany.techStack.map((tech) => (
              <li key={tech.slug} className="techStackItem">
                <img src={tech.image} alt={tech.name} />
                <span>{tech.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  )
}

export default CompanyPage
