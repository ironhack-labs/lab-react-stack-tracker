import { useParams, useNavigate, useSearchParams, Link } from "react-router-dom"

function TechnologyPage({ technologies }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const previousCompany = searchParams.get("company")
    const { slug } = useParams()
    const techMatch = technologies.find(tech => tech.slug === slug)

    // Alternative way to create a back button:
    // const navigate = useNavigate()

    return (
        <div>
            <h1>Technology Details</h1>
            <div className="tech-page-list">
                <h2>{techMatch.name}</h2>
                <img src={techMatch.image} alt={`${techMatch.name} logo`} className="tech-image" />
                <p className="tech-description">{techMatch.description}</p>
                {/* <button onClick={() => navigate(-1)}>Back</button> */}
                <Link to={`/company/${previousCompany}`}>Back</Link>
            </div>
        </div>
    )
}

export default TechnologyPage
