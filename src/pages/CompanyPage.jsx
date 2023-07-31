import { useParams, Link } from "react-router-dom"

function CompanyPage({ companies }) {
    const { companySlug } = useParams()
    const companyMatch = companies.find(company => company.slug === companySlug)

    return (
        <div>
            <h1>Company Profile</h1>
            <div className="company-page-list">
                <a href={`https://${companyMatch.website}`} className="company-name">
                    {companyMatch.name}
                </a>
                <img src={companyMatch.logo} alt={`${companyMatch.name} logo`} className="company-image" />
                <p className="company-description">{companyMatch.description}</p>
            </div>

            <div className="tech-stack-list">
                {companyMatch.techStack.map(tech => (
                    <Link to={`/tech/${tech.slug}?company=${companyMatch.slug}`} key={tech.slug} className="tech-card">
                        <img src={tech.image} alt={`${tech.name} logo`} className="tech-image" />
                        {tech.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CompanyPage
